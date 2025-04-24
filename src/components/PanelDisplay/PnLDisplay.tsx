import React, { useState } from 'react';
import styles from './PnLDisplay.module.css';
import { FiTrendingUp, FiTrendingDown, FiChevronDown } from 'react-icons/fi';

const PnLDisplay: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState('Daily');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Sample data - replace with your actual data
  const pnlData = {
    Daily: 12500.75,
    Weekly: 84250.30,
    Monthly: 356200.00
  };

  const pnlValue = pnlData[timePeriod as keyof typeof pnlData];
  const isProfit = pnlValue >= 0;

  return (
    <div className={styles.pnlCard}>
      <div className={styles.pnlHeader}>
        <h3 className={styles.pnlTitle}>Profit & Loss</h3>
        
        <div className={styles.timePeriodDropdown}>
          <button 
            className={styles.dropdownToggle}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {timePeriod}
            <FiChevronDown className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.rotate : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <div className={styles.dropdownMenu}>
              {['Daily', 'Weekly', 'Monthly'].map((period) => (
                <button
                  key={period}
                  className={`${styles.dropdownItem} ${timePeriod === period ? styles.active : ''}`}
                  onClick={() => {
                    setTimePeriod(period);
                    setIsDropdownOpen(false);
                  }}
                >
                  {period}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`${styles.pnlValueContainer} ${isProfit ? styles.profit : styles.loss}`}>
        <div className={styles.pnlAmount}>
          {isProfit ? '+' : ''}
          {pnlValue.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>
        {isProfit ? (
          <FiTrendingUp className={styles.trendIcon} />
        ) : (
          <FiTrendingDown className={styles.trendIcon} />
        )}
      </div>
    </div>
  );
};

export default PnLDisplay;