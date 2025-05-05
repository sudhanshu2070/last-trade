import React from 'react';
import styles from './RiskManagement.module.css';

const RiskManagement: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🛡️</span> Risk Management
      </h3>
      
      <div className={styles.riskGrid}>
        <div className={styles.riskCard}>
          <h4 className={styles.riskTitle}>Position Sizing</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>Capital Allocation (%)</label>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue="10"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Max Positions</label>
            <input
              type="number"
              min="1"
              defaultValue="5"
              className={styles.input}
            />
          </div>
        </div>
        
        <div className={styles.riskCard}>
          <h4 className={styles.riskTitle}>Stop Loss</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>SL Type</label>
            <select className={styles.input}>
              <option value="percentage">Percentage</option>
              <option value="absolute">Absolute Value</option>
              <option value="atr">ATR Based</option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>SL Value</label>
            <input
              type="number"
              min="0.1"
              step="0.1"
              defaultValue="2"
              className={styles.input}
            />
          </div>
        </div>
        
        <div className={styles.riskCard}>
          <h4 className={styles.riskTitle}>Risk Controls</h4>
          <div className={styles.formGroup}>
            <label className={styles.label}>Daily Loss Limit (%)</label>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue="5"
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Max Drawdown (%)</label>
            <input
              type="number"
              min="1"
              max="100"
              defaultValue="20"
              className={styles.input}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;