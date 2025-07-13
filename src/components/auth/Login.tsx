import React, { useState, useEffect  } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
const Logo = 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('jwt', token);
      navigate('/dashboard'); 
    }
  }, [location, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <img src={Logo} alt="TradePulse Logo" className={styles.logo} />
          <h1 className={styles.companyName}>TradePulse</h1>
          <p className={styles.welcomeText}>Welcome back to your trading dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.inputLabel}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              placeholder="••••••••"
              required
            />
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.rememberMe}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className={styles.checkbox}
              />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </Link>
          </div>

          <button type="submit" className={styles.loginButton}>
            Sign In
          </button>
        </form>

        <div className={styles.signupPrompt}>
          <p>New to TradePulse? <Link to="/signup" className={styles.signupLink}>Create account</Link></p>
        </div>

        <div className={styles.socialLogin}>
          <div className={styles.divider}>
            <span>or continue with</span>
          </div>
          <div className={styles.socialIcons}>
            <a
              href="https://wheat-chinchilla-956240.hostingersite.com/api/auth/google"
              className={styles.googleButton}
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className={styles.googleLogo}
              />
              <span className={styles.googleText}>Sign in with Google</span>
            </a>
            <button type="button" className={styles.socialButton}>
              <img src="/icons/apple.svg" alt="Apple" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;