import React, { useState } from 'react';
import styles from './RiskManagement.module.css';

const RiskManagement: React.FC = () => {
  const [exitStrategy, setExitStrategy] = useState<string>('');
  const [lossThreshold, setLossThreshold] = useState<number>(3000);
  const [profitThreshold, setProfitThreshold] = useState<number>(9000);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🛡️</span> Risk Management
      </h3>
      
      <div className={styles.strategyContainer}>
        <div className={styles.strategyBox}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="exitStrategy"
              checked={exitStrategy === 'loss'}
              onChange={() => setExitStrategy('loss')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Exit When Overall Loss Reached</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="number"
              value={lossThreshold}
              onChange={(e) => setLossThreshold(Number(e.target.value))}
              className={styles.valueInput}
            />
            <span className={styles.currency}>INR</span>
          </div>
        </div>

        <div className={styles.strategyBox}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="exitStrategy"
              checked={exitStrategy === 'profit'}
              onChange={() => setExitStrategy('profit')}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>Exit When Overall Profit Reached</span>
          </label>
          <div className={styles.inputGroup}>
            <input
              type="number"
              value={profitThreshold}
              onChange={(e) => setProfitThreshold(Number(e.target.value))}
              className={styles.valueInput}
            />
            <span className={styles.currency}>INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;