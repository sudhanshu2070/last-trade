import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PasswordForm from './authComponents/PasswordForm';
import { useAuth } from '../Context/AuthContext';

const ResetPasswordPage = () => {
  const { token } = useParams();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    //log the user out before allowing password reset
    if (isAuthenticated) {
      logout(); // ensures session is cleared during reset
    }
  }, [isAuthenticated]);
  
  return (
    <PasswordForm 
      mode="reset"
      token={token}
      title="Reset Your Password"
      description="Please enter your new password below"
    />
  );
};

export default ResetPasswordPage;