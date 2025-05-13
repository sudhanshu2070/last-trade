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
      </div>
    </div>
  );
};

export default StrategyPerformancePreview;