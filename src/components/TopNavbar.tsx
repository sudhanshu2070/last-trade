import { AppBar, Toolbar, IconButton, Badge, Avatar, Box } from '@mui/material';
import {
  Notifications as NotificationsIcon,
  AccountBalanceWallet as WalletIcon,
  Subscriptions as SubscribeIcon,
} from '@mui/icons-material';

const TopNavbar = () => {
  return (
    <AppBar 
      position="fixed"
      sx={{ 
        height: 64, // Fixed height
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo on the left */}
        <Box
          component="img"
          src="/logo.png" // Replace with your logo path
          alt="Trading Platform Logo"
          sx={{ height: 40 }}
        />

        {/* Icons on the right */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <IconButton color="inherit" aria-label="subscribe">
            <SubscribeIcon />
          </IconButton>

          <IconButton color="inherit" aria-label="wallet">
            <WalletIcon />
          </IconButton>

          <IconButton color="inherit" aria-label="notifications">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" aria-label="profile">
            <Avatar 
              src="/profile.jpg" // Replace with profile image
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;