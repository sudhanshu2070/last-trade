import { Link } from 'react-router-dom';
import styles from './TopNavbar.module.css';
import {
  FiBell as NotificationsIcon,
  FiCreditCard as WalletIcon,
  FiStar as SubscribeIcon,
} from 'react-icons/fi';

const TopNavbar = () => {
  return (
    <header className={styles.topNavbar}>
      <Link to="/" className={styles.logoLink}>
        <img 
          src="/logo.png" 
          alt="Trading Platform" 
          className={styles.logo} 
        />
      </Link>

      <div className={styles.navIcons}>
        <button className={styles.iconButton} aria-label="Subscribe">
          <SubscribeIcon className={styles.icon} />
        </button>

        <button className={styles.iconButton} aria-label="Wallet">
          <WalletIcon className={styles.icon} />
        </button>

        <button className={styles.iconButton} aria-label="Notifications">
          <div className={styles.notificationWrapper}>
            <NotificationsIcon className={styles.icon} />
            <span className={styles.badge}>4</span>
          </div>
        </button>

        <button className={`${styles.iconButton} ${styles.avatarButton}`} aria-label="Profile">
          <img src="/profile.jpg" alt="Profile" className={styles.avatar} />
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;