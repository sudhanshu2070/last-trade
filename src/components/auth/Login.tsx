import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import styles from './Login.module.css';
import Logo from '../../assets/logo.jpg';
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const token = params.get('token');
  //   if (token) {
  //     localStorage.setItem('jwt', token);
  //     navigate('/dashboard'); 
  //   }
  // }, [location, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Hardcoded credentials check
      if (email === 'admin@pwp.com' && password === '123') {
        await login(); // Set authenticated state
        navigate('/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        {/* Logo & Brand */}
        <div className={styles.brandContainer}>
          <img src={Logo} alt="Profit With Precision" className={styles.logo} />
          <h1 className={styles.brandName}>Profit With Precision</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <h2 className={styles.welcomeText}>Welcome back!</h2>

          {error && <div className={styles.errorMessage}>{error}</div>}
          
          {/* Email */}
          <div className={styles.inputGroup}>
            <AiOutlineMail className={styles.inputIcon} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          {/* Password Field */}
          <div className={styles.inputGroup}>
            <AiOutlineLock className={styles.inputIcon} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <div className={styles.passwordActions}>
              <button 
                type="button" 
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>
          </div>
          <a href="/forgot-password" className={styles.forgotPassword}>Forgot password?</a>

          <button 
            type="submit" 
            className={styles.primaryButton}
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>

          {/* Divider */}
          <div className={styles.divider}>
            <span>or continue with</span>
          </div>

          {/* Google Sign In */}
          <a
            href="http://51-20-41-6.nip.io:3000/api/auth/google"
            className={styles.googleButton}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
              className={styles.googleLogo}
            />
            Sign in with Google
          </a>

          {/* Sign Up Link */}
          <p className={styles.switchAuthText}>
            New to Profit With Precision? <a href="/signup">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;