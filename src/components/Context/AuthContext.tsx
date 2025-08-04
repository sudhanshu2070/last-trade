import axios from 'axios';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  user: any;
  login: (userData: any) => void;
  logout: () => void;
  verifyToken: (token: string) => Promise<boolean>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData: any) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    
    // Clear user data and authentication state
    try {
      
      axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
      setUser(null);

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const verifyToken = async (token: string) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/auth/verify-token`,
        { token },
        { withCredentials: true }
      );
      login(response.data.user);
      return true;
    } catch (err) {
      logout();
      return false;
    }
  };

  // Fetching user info on initial load to restore session
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_API_URL}/auth/verifyOnRefresh`,
          {},
          { withCredentials: true } // IMPORTANT: sends the HttpOnly cookie
        );
        login(res.data.user); // set user and isAuthenticated
      } catch (err) {
        console.error('Auth check failed:', err);
        logout(); // invalid token or no token
      }
    };

    checkAuth();
  }, []);


  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, verifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};