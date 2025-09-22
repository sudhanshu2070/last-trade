import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Dashboard from './components/Dashboard/Dashboard';
import TestComp from './components/TestComp';
import TopNavbar from './components/TopNavbar/TopNavbar';
import NavTabs from './components/NavTabs/NavTabs';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import './styles/global.css';
import styles from './App.module.css';
import BrokerConnection from './components/Brokers/BrokerConnection';
import StrategyPage from './Pages/Strategy/StrategyPage';
import VerifyLogin from './components/auth/VerifyLogin';
import VerifyPrompt from './components/auth/VerifyPrompt';
import { useAuth } from './components/Context/AuthContext'; 
import ForgotPasswordPage from './components/auth/ForgotPasswordPage';
import ResetPasswordPage from './components/auth/ResetPasswordPage';
import SetupPasswordPage from './components/auth/SetupPasswordPage';
import ProfilePage from './Pages/Google/ProfilePage';
import BrokersPage from './Pages/Brokers/BrokersPage';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isAuthenticated } = useAuth(); // Hook to check auth status

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirecting root to login if not authenticated */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
        />

        {/* Auth routes (full-screen layout) */}
        <Route path="/login" element={
          !isAuthenticated ? <Login /> : <Navigate to="/dashboard" />
        } />
        <Route path="/signup" element={
          !isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" />
        } />

        <Route path="/forgot-password" element={
          !isAuthenticated ? <ForgotPasswordPage /> : <Navigate to="/dashboard" />
        } />
        
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/setup-password" element={ <SetupPasswordPage /> } />

        <Route path="/verify" element={
          <div className={styles.authContainer}>
            <VerifyLogin />
          </div>
        } />
        <Route path="/verify-prompt" element={<VerifyPrompt />} />

        {/* Protected routes (with navbar layout) */}
        <Route path="/*" element={
          isAuthenticated ? (
            <div className={styles.appContainer}>
              <TopNavbar />
              <div className={styles.contentWrapper}>
                {!isMobile && (
                  <div className={styles.desktopNavContainer}>
                    <NavTabs />
                  </div>
                )}
                <main className={`${styles.mainContent} ${!isMobile ? styles.withNav : ''}`}>
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/portfolio" element={<BrokerConnection />} />
                    <Route path="/brokers" element={<BrokersPage/>} />
                    <Route path="/strategies" element={<StrategyPage />} />
                     {/* <Route path="/strategies/:tab" element={<StrategyPage />} /> */}
                    <Route path="/strategies/:tab" element={<StrategyPage key={location.pathname} />} />                  
                    <Route path="/backtest" element={<TestComp name={'Backtest'}/>} />
                    <Route path="/profile" element={<ProfilePage />} />


                    {/* Redirect any unknown paths to dashboard */}
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                  </Routes>
                </main>
              </div>
              {isMobile && <NavTabs />}
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;