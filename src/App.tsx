import { Box, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { tradingTheme } from './styles/theme';
import Dashboard from './components/Dashboard';
import NavTabs from './components/NavTabs';
import RightSideNav from './components/RightSideNav';
import { useMediaQuery } from '@mui/material';
import TestComp from './components/TestComp';
import TopNavbar from './components/TopNavbar';

function AppContent() {
  const isMobile = useMediaQuery(tradingTheme.breakpoints.down('sm'));

  return (
    <BrowserRouter>
      <TopNavbar />
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          pt: '64px', // Height of TopNavbar
          pb: isMobile ? '56px' : 0, // Height of bottom nav if mobile
        }}
      >
        {/* Left Navigation (desktop only) */}
        {!isMobile && (
          <Box
            sx={{
              width: 240,
              flexShrink: 0,
              position: 'fixed',
              left: 0,
              top: '64px', // Below TopNavbar
              bottom: 0,
              overflowY: 'auto',
            }}
          >
            <NavTabs />
          </Box>
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: !isMobile ? '240px' : 0, // Offset for left nav
            mr: '64px', // Space for right nav
            width: '100%',
            maxWidth: 'calc(100% - 64px)', // Account for right nav
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/portfolio" element={<TestComp />} />
            <Route path="/orders" element={<TestComp />} />
            <Route path="/strategies" element={<TestComp />} />
            <Route path="/settings" element={<TestComp />} />
          </Routes>
        </Box>

        {/* Right Navigation (always visible) */}
        {/* <RightSideNav /> */}
      </Box>

      {/* Bottom Navigation (mobile only) */}
      {isMobile && <NavTabs />}
    </BrowserRouter>
  );
}

function App() {
  return (
    <ThemeProvider theme={tradingTheme}>
      <CssBaseline />
      <AppContent />
    </ThemeProvider>
  );
}

export default App;