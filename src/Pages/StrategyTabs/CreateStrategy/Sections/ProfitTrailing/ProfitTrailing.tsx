import React from 'react';
import styles from './ProfitTrailing.module.css';

const ProfitTrailing: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>📈</span> Profit Trailing
      </h3>
      
      <div className={styles.trailingGrid}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Enable Trailing</label>
          <select className={styles.input}>
            <option value="none">Disabled</option>
            <option value="percentage">Percentage Based</option>
            <option value="points">Points Based</option>
          </select>
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Trigger Percentage</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            defaultValue="5"
            className={styles.input}
            placeholder="e.g. 5"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Trail Percentage</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            defaultValue="1"
            className={styles.input}
            placeholder="e.g. 1"
          />
        </div>
        
        <div className={styles.formGroup}>
          <label className={styles.label}>Min Profit Lock (%)</label>
          <input
            type="number"
            min="0.1"
            step="0.1"
            defaultValue="2"
            className={styles.input}
            placeholder="e.g. 2"
          />
        </div>
      </div>
      
      <div className={styles.note}>
        <p>Trailing will activate when profit reaches the trigger percentage, then adjust stop loss to lock in minimum profit while allowing position to run.</p>
      </div>
    </div>
  );
};

export default ProfitTrailing;