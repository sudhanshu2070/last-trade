import React from 'react';
import styles from './PnLDisplay.module.css';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

const PnLDisplay: React.FC = () => {
  const pnlValue = 12500.75;
  const isProfit = pnlValue >= 0;

  return (
    <div className={`${styles.pnlContainer} ${isProfit ? styles.profit : styles.loss}`}>
      <span className={styles.pnlLabel}>PNL:</span>
      <span className={styles.pnlValue}>
        {isProfit ? '+' : ''}
        {pnlValue.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </span>
      {isProfit ? (
        <FiTrendingUp className={styles.trendIcon} />
      ) : (
        <FiTrendingDown className={styles.trendIcon} />
      )}
    </div>
  );
};

export default PnLDisplay;