import React from 'react';
import styles from './TradeButtons.module.css';
import { FiCreditCard, FiSend } from 'react-icons/fi';

const TradeButtons: React.FC = () => {
  return (
    <div className={styles.tradeButtonsContainer}>
      <button className={`${styles.tradeButton} ${styles.connectButton}`}>
        <FiCreditCard className={styles.buttonIcon} />
        <span>Connect Broker</span>
      </button>
      
      <button className={`${styles.tradeButton} ${styles.executeButton}`}>
        <FiSend className={styles.buttonIcon} />
        <span>Execute Trade</span>
      </button>
    </div>
  );
};

export default TradeButtons;