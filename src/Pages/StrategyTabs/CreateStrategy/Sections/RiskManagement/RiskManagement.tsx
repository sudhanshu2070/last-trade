import React, { useState } from 'react';
import styles from './RiskManagement.module.css';

const RiskManagement: React.FC = () => {
  const [lossEnabled, setLossEnabled] = useState<boolean>(true);
  const [profitEnabled, setProfitEnabled] = useState<boolean>(true);
  const [lossThreshold, setLossThreshold] = useState<number>(3000);
  const [profitThreshold, setProfitThreshold] = useState<number>(9000);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🛡️</span> Risk Management
      </h3>
      
      <div className={styles.optionsRow}>
        {/* Loss Threshold Option */}
        <div className={styles.optionContainer}>
          <div className={styles.optionHeader}>
            <span className={styles.optionLabel}>Exit When Overall Loss Reached</span>
            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={lossEnabled}
                onChange={(e) => setLossEnabled(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="number"
              value={lossThreshold}
              onChange={(e) => setLossThreshold(Number(e.target.value))}
              className={`${styles.valueInput} ${!lossEnabled ? styles.disabled : ''}`}
              disabled={!lossEnabled}
            />
            <span className={styles.currency}>INR</span>
          </div>
        </div>

        {/* Profit Threshold Option */}
        <div className={styles.optionContainer}>
          <div className={styles.optionHeader}>
            <span className={styles.optionLabel}>Exit When Overall Profit Reached</span>
            <label className={styles.checkboxContainer}>
              <input
                type="checkbox"
                checked={profitEnabled}
                onChange={(e) => setProfitEnabled(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span className={styles.checkmark}></span>
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="number"
              value={profitThreshold}
              onChange={(e) => setProfitThreshold(Number(e.target.value))}
              className={`${styles.valueInput} ${!profitEnabled ? styles.disabled : ''}`}
              disabled={!profitEnabled}
            />
            <span className={styles.currency}>INR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagement;