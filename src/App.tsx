import { Box, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';  // Changed from Router to BrowserRouter
import { tradingTheme } from './styles/theme';
import Dashboard from './components/Dashboard';
import NavTabs from './components/NavTabs';
import RightSideNav from './components/RightSideNav';
import { useMediaQuery, Theme } from '@mui/material';
import TestComp from './components/TestComp';
import TopNavbar from './components/TopNavbar';

function AppContent() {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
      <BrowserRouter>  {/* Changed from Router to BrowserRouter */}
      <TopNavbar />
        <Box sx={{ display: 'flex', minHeight: '100vh',pt: 8, }}>
          {/* Left Navigation (desktop only) */}
          {!isMobile && <NavTabs />}
          
          {/* Main Content */}
          <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            p: 3,
            pb: isMobile ? '56px' : 3,
            mr: '64px', // space for right nav
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
          <RightSideNav />
          
          {/* Bottom Navigation (mobile only) */}
          {isMobile && <NavTabs />}
        </Box>
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