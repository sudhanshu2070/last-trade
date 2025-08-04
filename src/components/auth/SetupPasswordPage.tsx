import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import styles from './SetupPassword.module.css';
import PasswordForm from './authComponents/PasswordForm';

const SetupPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { 
    verifyToken, 
    user, 
    loading: authLoading 
  } = useAuth();
  const [pageLoading, setPageLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const validateAccess = async () => {
      try {
        if (!token) {
          throw new Error('Missing authentication token');
        }

        const isValid = await verifyToken(token);
        if (!isValid) {
          throw new Error('Invalid or expired token');
        }

        // If user already has password, redirect to dashboard
        if (user?.hasPassword) {
          navigate('/dashboard');
          return;
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Authentication failed');
      } finally {
        setPageLoading(false);
      }
    };

    validateAccess();
  }, [token, verifyToken, user, navigate]);

  if (authLoading || pageLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Verifying your session...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <h2>Authentication Required</h2>
        <p>{error}</p>
        <button
          className={styles.actionButton}
          onClick={() => navigate('/login')}
        >
          Return to Login
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <PasswordForm
        mode="setup"
        title={user?.googleId ? "Secure Your Account" : "Create Your Password"}
        description={
          user?.googleId
            ? "Please set a password to enable email login"
            : "Create a password to secure your account"
        }
      />
    </div>
  );
};

export default SetupPasswordPage;