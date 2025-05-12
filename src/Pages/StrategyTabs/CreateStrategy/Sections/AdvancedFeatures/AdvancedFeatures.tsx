import React, { useState } from 'react';
import styles from './AdvancedFeatures.module.css';

const options = [
  'Combined Premium',
  'Move SL to Cost',
  'Exit All on SL/Target',
  'Pre-punch SL',
  'Wait & Trade',
  'Premium Difference',
  'Re-entry/Execute',
  'Trail SL',
];

const AdvancedFeatures: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState('');

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>⚙️</span> Advanced Features
      </h3>
      <div className={styles.radioGroup}>
        {options.map((option) => (
          <label key={option} className={styles.radioLabel}>
            <input
              type="radio"
              name="advancedFeature"
              value={option}
              checked={selectedFeature === option}
              onChange={(e) => setSelectedFeature(e.target.value)}
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