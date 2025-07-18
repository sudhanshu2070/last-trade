import React from 'react';

const VerifyPrompt = () => {
  return (
    <div style={styles.fullPage}>
      <div style={styles.card as React.CSSProperties}>
        <div style={styles.icon}>📧</div>
        <h2 style={styles.title}>Check your email</h2>
        <p style={styles.text}>
          We've sent you a verification link. Please check your inbox to complete the login.
        </p>
      </div>
    </div>
  );
};

const styles = {
  fullPage: {
    height: '100vh',
    width: '100vw',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f2f5',
  },
  card: {
    backgroundColor: '#fff',
    padding: '40px 30px',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
    maxWidth: '420px',
    width: '90%',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  icon: {
    fontSize: '56px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '26px',
    marginBottom: '12px',
    color: '#222',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.6',
  },
};

export default VerifyPrompt;