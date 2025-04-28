import React from 'react';
import BrokerConnection from '../Brokers/BrokerConnection';
import MarketSection from '../MarketSection/MarketSection';
import RecentActivity from '../RecentActivity/RecentStrategyActivity';
import styles from './Dashboard.module.css';
import MeanReversionStrategy from '../StrategyTemplate/MeanReversionStrategy/MeanReversionStrategy';
import StrangleStrategy from '../StrategyTemplate/StrangleStrategy/StrangleStrategy';
import TradeButtons from '../TradeButtons/TradeButtons';
import PnLDisplay from '../PanelDisplay/PnLDisplay';

const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Connected Brokers */}
        <section className={styles.connectedBrokers}>
          <BrokerConnection />
        </section>

        {/* PnL and Buttons
        <section className={styles.pnlAndButtons}>
          <PnLDisplay />
          <TradeButtons />
        </section> */}

        {/* Strategy Templates */}
        <section className={styles.strategyTemplates}>
          <h2 className={styles.sectionTitle}>Strategy Templates</h2>
          <div className={styles.strategyGrid}>
            <StrangleStrategy />
            <MeanReversionStrategy />
          </div>
        </section>

        {/* Bottom Row: Market Watch + Recent Activity */}
        <div className={styles.bottomRow}>
          <div className={styles.marketWatch}>
            <MarketSection />
          </div>
          <div className={styles.recentActivity}>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;