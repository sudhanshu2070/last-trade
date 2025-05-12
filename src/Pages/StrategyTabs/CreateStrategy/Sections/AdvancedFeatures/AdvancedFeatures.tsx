import React, { useState } from 'react';
import styles from './AdvancedFeatures.module.css';

const AdvancedFeatures: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const options = [
    'Combined Premium',
    'Move SL to Cost',
    'Exit All on SL/Target',
    'Pre-punch SL',
    'Wait & Trade',
    'Premium Difference',
    'Re-entry/Execute',
    'Trail SL'
  ];

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🔧</span> Advanced Features
      </h3>
      
      <div className={styles.radioGrid}>
        {options.map((option) => (
          <label key={option} className={styles.radioLabel}>
            <input
              type="radio"
              name="advancedFeatures"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className={styles.radioInput}
            />
            <span className={styles.radioText}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AdvancedFeatures;