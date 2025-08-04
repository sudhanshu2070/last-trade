import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';
import styles from './ForgotPassword.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/auth/forgot-password`,
        { email },
        { withCredentials: true }
      );
      
      setMessage('If an account exists, a reset link has been sent to your email');
      setEmail('');
    } catch (err) {
      setError('Error sending reset link. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.forgotPasswordContainer}>
      <div className={styles.forgotPasswordCard}>
        <h1 className={styles.title}>Forgot Password?</h1>
        <p className={styles.subtitle}>Enter your email to reset your password</p>

        {message && <div className={styles.successMessage}>{message}</div>}
        {error && <div className={styles.errorMessage}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <AiOutlineMail className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Reset Link'}
          </button>
        </form>

        <div className={styles.backToLogin}>
          <button 
            onClick={() => navigate('/login')}
            className={styles.backButton}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;