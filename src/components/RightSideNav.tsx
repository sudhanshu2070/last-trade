import { Box, List, ListItem, ListItemIcon, ListItemText, Divider, useTheme } from '@mui/material';
import {
  AccountCircle as ProfileIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

const RightSideNav = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        width: '64px',
        bgcolor: 'background.paper',
        borderLeft: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 900,
        '&:hover': {
          width: '240px',
          boxShadow: theme.shadows[4],
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          '& .MuiListItemText-root': {
            display: 'block',
          },
        },
      }}
    >
      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        <List>
          <ListItem component="button">
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" sx={{ display: 'none' }} />
          </ListItem>
          <ListItem component="button">
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" sx={{ display: 'none' }} />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem component="button">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="Support" sx={{ display: 'none' }} />
          </ListItem>
        </List>
      </Box>
      <Box>
        <Divider />
        <List>
          <ListItem component="button">
            <ListItemIcon>
              <ProfileIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ display: 'none' }} />
          </ListItem>
          <ListItem component="button">
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ display: 'none' }} />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightSideNav;