import React from 'react';
import BrokerConnection from '../Brokers/BrokerConnection';
import MarketSection from '../MarketSection/MarketSection';
import RecentActivity from '../RecentActivity/RecentStrategyActivity';
import styles from './Dashboard.module.css';
import MeanReversionStrategy from '../StrategyTemplate/MeanReversionStrategy/MeanReversionStrategy';
import StrangleStrategy from '../StrategyTemplate/StrangleStrategy/StrangleStrategy';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Top Row: Connected Brokers + Market Watch */}
        <div className={styles.topRow}>
          {/* Connected Brokers */}
          <section className={styles.connectedBrokers}>
            <BrokerConnection />
          </section>

          {/* PnL Display + Trade Buttons */}
          <section className={styles.marketWatch}>
            <MarketSection />
          </section>
        </div>

        {/* Strategy Templates */}
        <section className={styles.strategyTemplates}>
          <h2 className={styles.sectionTitle}>Strategy Templates</h2>
          <div className={styles.strategyGrid}>
            <StrangleStrategy />
            <MeanReversionStrategy />
          </div>
        </section>

        {/* Recent Activity */}
        <div className={styles.bottomRow}>
          <div className={styles.recentActivity}>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;