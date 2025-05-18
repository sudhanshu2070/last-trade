import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './NavTabs.module.css';
import {
  FiHome as DashboardIcon,
  FiPieChart as PortfolioIcon,
  FiTrendingUp as StrategiesIcon,
  FiSettings as SettingsIcon,
  FiTwitter as TwitterIcon,
  FiMail as MailIcon,
  FiPhone as ContactIcon,
} from 'react-icons/fi';

// Navigation Items
const navItems = [
  { label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { label: 'Brokers', path: '/brokers', icon: <PortfolioIcon /> },
  { label: 'Strategies', path: '/strategies', icon: <StrategiesIcon /> },
  { label: 'Backtest', path: '/backtest', icon: <SettingsIcon /> },
];

// Social/Contact Links
const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/YourHandle', icon: <TwitterIcon /> },
  { label: 'Email Us', href: 'mailto:example@example.com', icon: <MailIcon /> },
  { label: 'Contact Us', href: 'tel:+1234567890', icon: <ContactIcon /> },
];

const NavTabs = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return (
      <nav className={styles.mobileNav}>
        {/* Navigation Items */}
        <div className={styles.mobileNavContainer}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.mobileNavItem} ${
                location.pathname === item.path ? styles.active : ''
              }`}
            >
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.label}>{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Social/Contact Links */}
        <div className={styles.socialLinksMobile}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLinkMobile}
            >
              <span className={styles.icon}>{link.icon}</span>
            </a>
          ))}
        </div>
      </nav>
    );
  }

  return (
    <aside className={styles.desktopNav}>
      <div className={styles.desktopNavContainer}>
        {/* Navigation Items */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`${styles.desktopNavItem} ${
              location.pathname === item.path ? styles.active : ''
            }`}
          >
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.activeIndicator}></span>
          </Link>
        ))}

        {/* Social/Contact Links */}
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <span className={styles.icon}>{link.icon}</span>
              <span className={styles.label}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default NavTabs;