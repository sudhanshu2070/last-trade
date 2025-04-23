import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import styles from './NavTabs.module.css';
import {
  FiHome as DashboardIcon,
  FiPieChart as PortfolioIcon,
  FiList as OrdersIcon,
  FiTrendingUp as StrategiesIcon,
  FiSettings as SettingsIcon,
} from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { label: 'Portfolio', path: '/portfolio', icon: <PortfolioIcon /> },
  { label: 'Orders', path: '/orders', icon: <OrdersIcon /> },
  { label: 'Strategies', path: '/strategies', icon: <StrategiesIcon /> },
  { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

const NavTabs = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  if (isMobile) {
    return (
      <nav className={styles.mobileNav}>
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
      </nav>
    );
  }

  return (
    <aside className={styles.desktopNav}>
      <div className={styles.desktopNavContainer}>
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
      </div>
    </aside>
  );
};

export default NavTabs;