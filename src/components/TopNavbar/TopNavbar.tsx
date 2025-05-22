import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './TopNavbar.module.css';
import {
  FiBell as NotificationsIcon,
  FiCreditCard as WalletIcon,
  FiStar as SubscribeIcon,
} from 'react-icons/fi';
import { CSSTransition } from 'react-transition-group';
import logo from '../../assets/logo.jpg';

const userData = {
  name: 'Thomas Muller',
  email: 'thomasMuller@bayern.com',
};

const TopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownNodeRef = useRef<HTMLDivElement>(null);


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const menuItems = [
    { icon: '👤', label: 'Profile' },
    { icon: '💎', label: 'Subscription' },
    { icon: '🔑', label: 'Change Password' },
    { icon: '🆕', label: "What's New", hasNotification: true },
    { icon: '🚪', label: 'Logout' }
  ];


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

        <div className={styles.profileSection} ref={dropdownRef}>
          <span className={styles.greeting}>Hello, {userData.name}</span>
          <button 
            className={`${styles.iconButton} ${styles.avatarButton}`} 
            aria-label="Profile"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <img 
              src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight" 
              alt="Profile" 
              className={styles.avatar} />
            <span className={styles.avatarStatus}></span>
          </button>

          <CSSTransition
            in={isOpen}
            timeout={200}
            classNames="dropdown"
            unmountOnExit
            nodeRef={dropdownNodeRef} 
          >
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownArrow}></div>
              <div className={styles.dropdownHeader}>
                <img 
                  src="https://api.dicebear.com/7.x/adventurer/svg?seed=Midnight" 
                  alt="Profile" 
                  className={styles.dropdownAvatar} 
                />
                <div>
                  <div className={styles.dropdownName}>{userData.name}</div>
                  <div className={styles.dropdownEmail}>{userData.email}</div>
                </div>
              </div>
              
              <div className={styles.dropdownDivider}></div>
              
              <ul className={styles.dropdownList}>
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <button className={styles.dropdownItem}>
                      <span className={styles.itemIcon}>{item.icon}</span>
                      <span>{item.label}</span>
                      {item.hasNotification && (
                        <span className={styles.notificationBadge}></span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;