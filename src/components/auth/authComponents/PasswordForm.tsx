import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './PasswordForm.module.css';
import {
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCheckCircle,
  AiOutlineCloseCircle
} from 'react-icons/ai';

type PasswordFormProps = {
  mode: 'reset' | 'setup';
  token?: string;
  title: string;
  description?: string;
};

const PasswordForm = ({ mode, token, title, description }: PasswordFormProps) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Password strength calculation
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (password.match(/[A-Z]/)) strength += 1;
    if (password.match(/[0-9]/)) strength += 1;
    if (password.match(/[^A-Za-z0-9]/)) strength += 1;
    setStrength(strength);
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const endpoint = mode === 'reset' 
        ? `/auth/reset-password/${token}`
        : '/auth/setup-password';
      
      await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}${endpoint}`,
        { password },
        { withCredentials: true }
      );

      setMessage(mode === 'reset' 
        ? 'Password reset successfully' 
        : 'Password set successfully'
      );

      // Redirect after success
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (err) {
      setError(
        mode === 'reset' 
          ? 'Error resetting password. The link may have expired.'
          : 'Error setting password. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}

      {message && (
        <div className={styles.successMessage}>
          <AiOutlineCheckCircle className={styles.messageIcon} />
          {message}
        </div>
      )}
      
      {error && (
        <div className={styles.errorMessage}>
          <AiOutlineCloseCircle className={styles.messageIcon} />
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>New Password</label>
          <div className={styles.passwordInputWrapper}>
            <AiOutlineLock className={styles.inputIcon} />
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="Enter your new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <button 
              type="button" 
              className={styles.toggleVisibility}
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className={styles.passwordStrength}>
            <div 
              className={`${styles.strengthBar} ${
                strength === 0 ? '' : 
                strength < 3 ? '' : 
                strength === 3 ? styles.medium : styles.strong
              }`}
              style={{ width: `${strength * 25}%` }}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm Password</label>
          <div className={styles.passwordInputWrapper}>
            <AiOutlineLock className={styles.inputIcon} />
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="Confirm your new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
            />
          </div>
        </div>

        <div className={styles.passwordRules}>
          <p>Password must contain:</p>
          <div className={`${styles.rule} ${password.length >= 8 ? styles.ruleValid : ''}`}>
            {password.length >= 8 ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
            At least 8 characters
          </div>
          <div className={`${styles.rule} ${password.match(/[A-Z]/) ? styles.ruleValid : ''}`}>
            {password.match(/[A-Z]/) ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
            At least one uppercase letter
          </div>
          <div className={`${styles.rule} ${password.match(/[0-9]/) ? styles.ruleValid : ''}`}>
            {password.match(/[0-9]/) ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
            At least one number
          </div>
          <div className={`${styles.rule} ${password.match(/[^A-Za-z0-9]/) ? styles.ruleValid : ''}`}>
            {password.match(/[^A-Za-z0-9]/) ? <AiOutlineCheckCircle /> : <AiOutlineCloseCircle />}
            At least one special character
          </div>
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
          disabled={isLoading || !password || !confirmPassword || password !== confirmPassword || strength < 3}
        >
          {isLoading ? 'Processing...' : mode === 'reset' ? 'Reset Password' : 'Set Password'}
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;