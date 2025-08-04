import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: string;
  name: string;
  email: string;
  userId: string;
  googleId?: string;
  hasPassword: boolean;
  isEmailVerified: boolean;
  picture?: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => Promise<void>;
  verifyToken: (token: string) => Promise<boolean>;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser({
      ...userData,
      hasPassword: !!userData.hasPassword
    });
  };

  const logout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/auth/logout`, 
        {}, 
        { withCredentials: true }
      );
      setIsAuthenticated(false);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  const verifyToken = async (token: string): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/auth/verify-token`,
        { token },
        { withCredentials: true }
      );
      
      login({
        ...response.data.user,
        hasPassword: !!response.data.user.password,
        picture: response.data.user.googleId 
          ? response.data.user.picture 
          : undefined
      });
      
      return true;
    } catch (err) {
      await logout();
      return false;
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_API_URL}/auth/verifyOnRefresh`,
          {},
          { withCredentials: true }
        );
        login({
          ...res.data.user,
          hasPassword: !!res.data.user.password
        });
      } catch (err) {
        await logout();
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        isAuthenticated, 
        user, 
        login, 
        logout, 
        verifyToken,
        loading 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};