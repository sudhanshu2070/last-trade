import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
const Logo = 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        <div className={styles.signupHeader}>
          <img src={Logo} alt="TradePulse Logo" className={styles.logo} />
          <h1 className={styles.companyName}>TradePulse</h1>
          <p className={styles.welcomeText}>Create your trading account</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.inputLabel}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
              placeholder="John Doe"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.inputLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={styles.inputField}
              placeholder="••••••••"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.inputLabel}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.inputField}
              placeholder="••••••••"
              required
            />
          </div>

          <div className={styles.terms}>
            <input type="checkbox" id="terms" className={styles.checkbox} required />
            <label htmlFor="terms">
              I agree to the <Link to="/terms" className={styles.link}>Terms of Service</Link> and <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
            </label>
          </div>

          <button type="submit" className={styles.signupButton}>
            Create Account
          </button>
        </form>

        <div className={styles.loginPrompt}>
          <p>Already have an account? <Link to="/login" className={styles.loginLink}>Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;