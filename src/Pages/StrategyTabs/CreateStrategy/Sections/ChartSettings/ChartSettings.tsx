import { useState } from 'react';
import styles from './ChartSettings.module.css';

interface ChartSettingsProps {
  onChange: (value: string) => void;
}

const ChartSettings:React.FC<ChartSettingsProps> = ({onChange}) => {
  const [transactionType, setTransactionType] = useState('bothLongAndShort');
  const [chartType, setChartType] = useState('candle');
  const [timeFrame, setTimeFrame] = useState('1m');

  const transactionOptions = [
    { label: 'Both Side (Long & Short)', value: 'bothLongAndShort' },
    { label: 'Long Only', value: 'long' },
    { label: 'Short Only', value: 'short' }
  ];

  const chartOptions = [
    { label: 'Candle', value: 'candle' },
    { label: 'Line', value: 'line' },
    { label: 'Area', value: 'area' },
    { label: 'Heikin Ashi', value: 'heikin_ashi' },
    { label: 'Renko', value: 'renko' }
  ];

  const timeOptions = [
    { label: '1 minute', value: '1m' },
    { label: '5 minutes', value: '5m' },
    { label: '15 minutes', value: '15m' },
    { label: '1 hour', value: '1h' },
    { label: '4 hours', value: '4h' },
    { label: '1 day', value: '1d' }
  ];

  const handleTransactionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value; 
    setTransactionType(value);
    onChange(value); // Notify parent component of the change
  }

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.dropdownGroup}>
        {/* Transaction Type Dropdown */}
        <div className={styles.dropdown}>
          <label className={styles.dropdownLabel}>Transaction Type</label>
          <select
            value={transactionType}
            onChange={handleTransactionChange}
            className={styles.dropdownSelect}
          >
            {transactionOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
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
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
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
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ChartSettings;