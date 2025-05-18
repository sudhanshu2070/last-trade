import React from 'react';
import styles from './StrategyPerformancePreview.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const StrategyPerformancePreview: React.FC = () => {
  const navigate = useNavigate();
  
  function handleBacktestClick() {
    navigate('/backtest');
  }

  return (
    <div className={styles.section}>
      <div className={styles.headerRow}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faChartPie} /> 
          Strategy Performance Preview
        </h3>

        <button className={styles.backtestButton} onClick={handleBacktestClick}>
          Run Full Backtest
        </button>
      </div>
      
      <div className={styles.previewContainer}>
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Margin Required</div>
            <div className={styles.metricValue}>₹70,000</div>
            <div className={styles.metricNote}>Based on similar strategies</div>
          </div>

          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Win Rate</div>
            <div className={styles.metricValue}>78.5%</div>
            <div className={styles.metricNote}>Based on similar strategies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Profit Factor</div>
            <div className={styles.metricValue}>2.4</div>
            <div className={styles.metricNote}>Based on similar strategies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Max Drawdown</div>
            <div className={styles.metricValue}>12.5%</div>
            <div className={styles.metricNote}>Based on similar strategies</div>
          </div>
          <div className={styles.metricCard}>
            <div className={styles.metricLabel}>Avg. Trade</div>
            <div className={styles.metricValue}>120</div>
            <div className={styles.metricNote}>Based on similar strategies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyPerformancePreview;