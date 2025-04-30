import { Link } from 'react-router-dom';
import styles from './TopNavbar.module.css';
import {
  FiBell as NotificationsIcon,
  FiCreditCard as WalletIcon,
  FiStar as SubscribeIcon,
} from 'react-icons/fi';
import logo from '../../assets/logo.jpg';

const userData = {
  name: 'Thomas Muller',
};

const TopNavbar = () => {
  return (
    <header className={styles.topNavbar}>
      <Link to="/" className={styles.logoLink}>
        <img 
          src={logo} 
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

        <div className={styles.profileSection}>
          <span className={styles.greeting}>Hello, {userData.name}</span>
          <button className={`${styles.iconButton} ${styles.avatarButton}`} aria-label="Profile">
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight" 
              alt="Profile" 
              className={styles.avatar} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;