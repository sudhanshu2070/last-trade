import React, { useState } from 'react';
import styles from './SignUp.module.css';

const SignUp: React.FC = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!form.agreed) {
      alert("You must agree to the terms");
      return;
    }
    // Handle signup logic
    console.log("Form submitted", form);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <img className={styles.logo} src="https://www.svgrepo.com/show/354380/trade.svg" alt="Logo" />
          <div className={styles.companyName}>TradeSphere</div>
          <div className={styles.welcomeText}>Create your account</div>
        </div>

        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="username">Username</label>
            <input
              className={styles.inputField}
              type="text"
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="email">Email</label>
            <input
              className={styles.inputField}
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="password">Password</label>
            <input
              className={styles.inputField}
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.inputLabel} htmlFor="confirmPassword">Confirm Password</label>
            <input
              className={styles.inputField}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.rememberMe}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="agreed"
                checked={form.agreed}
                onChange={handleChange}
              />
              I agree to the <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className={styles.loginButton}>
            Create Account
          </button>
        </form>

        <div className={styles.signupPrompt}>
          Already have an account?
          <a href="/login" className={styles.signupLink}>Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;