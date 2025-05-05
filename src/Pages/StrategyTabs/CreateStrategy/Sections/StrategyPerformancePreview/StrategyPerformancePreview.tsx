import React from 'react';
import styles from './StrategyPerformancePreview.module.css';

const StrategyPerformancePreview: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🔍</span> Strategy Performance Preview
      </h3>
      
      <div className={styles.previewContainer}>
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>78.5%</div>
            <div className={styles.metricLabel}>Win Rate</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>2.4</div>
            <div className={styles.metricLabel}>Profit Factor</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>₹15,240</div>
            <div className={styles.metricLabel}>Avg Monthly Profit</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricValue}>12.5%</div>
            <div className={styles.metricLabel}>Max Drawdown</div>
          </div>
        </div>
        
        <div className={styles.chartPlaceholder}>
          <div className={styles.chartNote}>
            Performance chart will be displayed here
          </div>
        </div>
        
        <div className={styles.summary}>
          <h4 className={styles.summaryTitle}>Strategy Summary</h4>
          <ul className={styles.summaryList}>
            <li>Mean reversion strategy on NIFTY 50 5min chart</li>
            <li>Enters when RSI crosses below 30 with volume confirmation</li>
            <li>2% stop loss, 4% take profit</li>
            <li>Maximum 3 concurrent positions</li>
            <li>Active only between 9:30 AM to 2:30 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StrategyPerformancePreview;