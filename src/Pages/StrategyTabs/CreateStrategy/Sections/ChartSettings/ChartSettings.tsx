import { useState } from 'react';
import styles from './ChartSettings.module.css';

const ChartSettings = () => {
  const [transactionType, setTransactionType] = useState('Both Side (Long & Short)');
  const [chartType, setChartType] = useState('Candle');
  const [timeFrame, setTimeFrame] = useState('1 minute');

  const transactionOptions = [
    'Both Side (Long & Short)',
    'Long Only',
    'Short Only'
  ];

  const chartOptions = [
    'Candle',
    'Line',
    'Area',
    'Heikin Ashi',
    'Renko'
  ];

  const timeOptions = [
    '1 minute',
    '5 minutes',
    '15 minutes',
    '1 hour',
    '4 hours',
    '1 day'
  ];

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.dropdownGroup}>
        {/* Transaction Type Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.dropdownLabel}>Transaction Type</label>
          <select
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className={styles.dropdownSelect}
          >
            {transactionOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className={styles.dropdownArrow}>▼</div>
        </div>

        {/* Chart Type Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.dropdownLabel}>Chart Type</label>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
            className={styles.dropdownSelect}
          >
            {chartOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className={styles.dropdownArrow}>▼</div>
        </div>

        {/* Time Frame Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.dropdownLabel}>Time Frame</label>
          <select
            value={timeFrame}
            onChange={(e) => setTimeFrame(e.target.value)}
            className={styles.dropdownSelect}
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className={styles.dropdownArrow}>▼</div>
        </div>
      </div>
    </div>
  );
};

export default ChartSettings;