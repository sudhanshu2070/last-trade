import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      {/* Main app container - only for authenticated routes */}
      <Routes>
        {/* Auth routes (full-screen layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={
          <div className={styles.authContainer}>
            <VerifyLogin />
          </div>
        } />
        <Route path="/verify-prompt" element={<VerifyPrompt />} />


        {/* Protected routes (with navbar layout) */}
        <Route path="/*" element={
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
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/portfolio" element={<BrokerConnection />} />
                  <Route path="/brokers" element={<TestComp name={'Brokers'}/>} />
                  <Route path="/strategies" element={<StrategyPage />} />
                  {/* <Route path="/strategies/:tab" element={<StrategyPage />} /> */}
                  <Route path="/strategies/:tab" element={<StrategyPage key={location.pathname} />} />                  
                  <Route path="/backtest" element={<TestComp name={'Backtest'}/>} />
                </Routes>
              </main>
            </div>
            {isMobile && <NavTabs />}
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;