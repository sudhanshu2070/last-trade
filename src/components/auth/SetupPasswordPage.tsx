import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import PasswordForm from './authComponents/PasswordForm';

const SetupPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { verifyToken, isAuthenticated, user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      if (token) {
        const valid = await verifyToken(token);
        setIsValid(valid);
      }
      setIsLoading(false);
    };

    verify();
  }, [token, verifyToken]);

  useEffect(() => {
    if (isAuthenticated && user?.password) {
      // If user is already authenticated and has password, redirect to dashboard
      navigate('/dashboard');
    }
  }, [isAuthenticated, user, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isValid) {
    return <div>Invalid or expired token. Please try signing in again.</div>;
  }

  return (
    <PasswordForm 
      mode="setup"
      title="Set Your Password"
      description="Please create a password for your account"
    />
  );
};

export default SetupPasswordPage;