import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Dashboard from './components/Dashboard';
import TestComp from './components/TestComp';
import TopNavbar from './components/TopNavbar/TopNavbar';
import NavTabs from './components/NavTabs/NavTabs';
import './styles/global.css';
import styles from './App.module.css';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      <div className={styles.appContainer}>
        <TopNavbar />
        
        <div className={styles.contentWrapper}>
          {!isMobile && <NavTabs />}

          <main className={`${styles.mainContent} ${!isMobile ? styles.withNav : ''}`}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/portfolio" element={<TestComp />} />
              <Route path="/orders" element={<TestComp />} />
              <Route path="/strategies" element={<TestComp />} />
              <Route path="/settings" element={<TestComp />} />
            </Routes>
          </main>
        </div>

        {isMobile && <NavTabs />}
      </div>
    </BrowserRouter>
  );
}

export default App;