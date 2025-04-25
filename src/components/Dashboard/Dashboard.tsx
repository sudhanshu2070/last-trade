import React from 'react';
import BrokerConnection from '../Brokers/BrokerConnection';
import PnLDisplay from '../PanelDisplay/PnLDisplay';
import TradeButtons from '../TradeButtons/TradeButtons';
import MarketSection from '../MarketSection/MarketSection';
import RecentActivity from '../RecentActivity/RecentStrategyActivity';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.dashboardHeader}>
        <h1>Dashboard</h1>
      </header>
      
      <div className={styles.mainContent}>
        {/* Left column content */}
        <div className={styles.leftColumn}>
          <section className={styles.dashboardSection}>
            <BrokerConnection />
          </section>
          
          <div className={styles.pnlTradeContainer}>
            <PnLDisplay />
            <TradeButtons />
          </div>
          
          <section className={styles.dashboardSection}>
            <MarketSection />
          </section>
        </div>
        
        {/* Right column content (RecentActivity) */}
        <div className={styles.rightColumn}>
          <section className={styles.dashboardSection}>
            <RecentActivity />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;