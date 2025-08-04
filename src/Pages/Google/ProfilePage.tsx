import { useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';
import { useAuth } from '../../components/Context/AuthContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [needsPassword, setNeedsPassword] = useState(false);

  useEffect(() => {
    // Check if user is Google-authenticated without a password
    if (user?.googleId && !user.hasPassword) {
      setNeedsPassword(true);
    }
  }, [user]);

  return (
    <div className={styles.profileContainer}>
      <h1>Profile Settings</h1>
      
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <img 
            src={user?.picture || `https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || '')}&background=random`} 
            alt="Profile" 
            className={styles.avatar}
          />
          <h2>{user?.name}</h2>
          <p className={styles.userId}>User ID: {user?.userId}</p>
          <p className={styles.email}>{user?.email}</p>
          <p className={styles.authMethod}>
            Signed in with: {user?.googleId ? 'Google' : 'Email'}
          </p>
          <p className={styles.accountStatus}>
            Status: {user?.isEmailVerified ? 'Verified' : 'Not Verified'}
          </p>
        </div>

        <div className={styles.settingsSection}>
          {needsPassword && (
            <div className={styles.passwordAlert}>
              <h3>Account Security</h3>
              <p>Your Google account doesn't have a password set yet.</p>
              <button 
                className={styles.primaryButton}
                onClick={() => window.location.href = '/setup-password'}
              >
                Set Password Now
              </button>
            </div>
          )}

          <div className={styles.settingsGroup}>
            <h3>Account Actions</h3>
            {!user?.googleId && (
              <button 
                className={styles.secondaryButton}
                onClick={() => {
                  alert('Work in progress: Change Password functionality will be available soon.');
                    // window.location.href = '/change-password'
                  }
                }
              >
                Change Password
              </button>
            )}
            <button 
              className={styles.logoutButton}
              onClick={logout}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;