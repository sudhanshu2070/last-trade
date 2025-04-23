import { Link, useLocation } from 'react-router-dom';
import { 
  BottomNavigation, 
  BottomNavigationAction, 
  Paper, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  useMediaQuery,
  Theme
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  AccountBalance as PortfolioIcon,
  ListAlt as OrdersIcon,
  AutoAwesomeMotion as StrategiesIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

const navItems = [
  { label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  { label: 'Portfolio', path: '/portfolio', icon: <PortfolioIcon /> },
  { label: 'Orders', path: '/orders', icon: <OrdersIcon /> },
  { label: 'Strategies', path: '/strategies', icon: <StrategiesIcon /> },
  { label: 'Settings', path: '/settings', icon: <SettingsIcon /> },
];

const NavTabs = () => {
  const location = useLocation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000 }}>
        <BottomNavigation
          showLabels
          value={location.pathname}
          sx={{
            bgcolor: 'primary.main',
            '& .Mui-selected': {
              color: 'white',
            },
          }}
        >
          {navItems.map((item) => (
            <BottomNavigationAction
              key={item.path}
              label={item.label}
              value={item.path}
              icon={item.icon}
              component={Link}
              to={item.path}
            />
          ))}
        </BottomNavigation>
      </Paper>
    );
  }

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          bgcolor: 'primary.main',
          top: 64, // Below TopNavbar
          height: 'calc(100vh - 64px)', // Account for TopNavbar
          color: 'white',
        },
      }}
    >
      <List>
        {navItems.map((item) => {
          const isSelected = location.pathname === item.path;
          return (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isSelected}
                sx={{
                  '&.Mui-selected': {
                    bgcolor: 'primary.light',
                  },
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                }}
              >
                <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default NavTabs;