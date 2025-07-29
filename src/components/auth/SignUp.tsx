import React, { useState } from 'react';
import styles from './SignUp.module.css';
import Logo from '../../assets/logo.jpg';
import { FiUser, FiMail, FiPhone, FiLock } from 'react-icons/fi';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic
    console.log(formData);
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupCard}>
        {/* Logo & Brand */}
        <div className={styles.brandContainer}>
          <img src={Logo} alt="Profit With Precision" className={styles.logo} />
          <h1 className={styles.brandName}>Profit With Precision</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.signupForm}>
          <h2 className={styles.welcomeText}>Create your account</h2>
          
          {/* Full Name */}
          <div className={styles.inputGroup}>
            <FiUser className={styles.inputIcon} />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className={styles.inputGroup}>
            <FiMail className={styles.inputIcon} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.inputGroup}>
            <FiPhone className={styles.inputIcon} />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="button" className={styles.verifyButton}>Verify</button>
          </div>

          {/* Password */}
          <div className={styles.inputGroup}>
            <FiLock className={styles.inputIcon} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className={styles.inputGroup}>
            <FiLock className={styles.inputIcon} />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Terms Checkbox */}
          <div className={styles.termsGroup}>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreeTerms">
              I agree to the <a href="/terms">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>
            </label>
          </div>

          <button 
            type="submit" 
            className={styles.primaryButton}
            disabled={!formData.agreeTerms}
            >
              Create Account
          </button>

          {/* Sign In Link */}
          <p className={styles.switchAuthText}>
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;