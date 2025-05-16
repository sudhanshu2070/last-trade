import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './AdvancedFeatures.module.css';

const AdvancedFeatures: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);
  const [enableAll, setEnableAll] = useState(false);

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

  const handleOptionChange = (option: string) => {
    setSelectedOptions(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleEnableAll = () => {
    if (enableAll) {
      setSelectedOptions([]);
    } else {
      setSelectedOptions([...options]);
    }
    setEnableAll(!enableAll);
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader} onClick={toggleExpand}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faGear} />
          Advanced Features
        </h3>
        <div className={styles.headerControls}>
          {isExpanded && (
            <div className={styles.enableAllContainer} onClick={(e) => e.stopPropagation()}>
              <span className={styles.enableAllText}>Enable All</span>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={enableAll}
                  onChange={toggleEnableAll}
                  className={styles.toggleInput}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          )}
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`}
          />
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.toggleGrid}>
          {options.map((option) => (
            <div key={option} className={styles.toggleContainer}>
              <span className={styles.toggleText}>{option}</span>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className={styles.toggleInput}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdvancedFeatures;