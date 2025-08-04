import { useEffect, useState } from 'react';
import styles from './ProfilePage.module.css';
import { useAuth } from '../../components/Context/AuthContext';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [needsPassword, setNeedsPassword] = useState(false);

  useEffect(() => {
    // Checking if the user is authenticated and has a Google account without a password
    if (user?.authProvider === 'google' && !user.hasPassword) {
      setNeedsPassword(true);
    }
  }, [user]);

  return (
    <div className={styles.profileContainer}>
      <h1>Profile Settings</h1>
      
      <div className={styles.profileCard}>
        <div className={styles.avatarSection}>
          <img 
            src={"https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight"}   
            alt="Profile" 
            className={styles.avatar}
          />
          <h2>{user?.name}</h2>
          <p className={styles.email}>{user?.email}</p>
          <p className={styles.authMethod}>
            Signed in with: {user?.authProvider === 'google' ? 'Google' : 'Email'}
          </p>
        </div>

        <div className={styles.settingsSection}>
          {needsPassword && (
            <div className={styles.passwordAlert}>
              <h3>Account Security</h3>
              <p>Your account doesn't have a password set yet.</p>
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
            <button 
              className={styles.secondaryButton}
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