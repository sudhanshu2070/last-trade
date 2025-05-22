import React, { useState } from 'react';
import styles from './ProfitTrailing.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const ProfitTrailing: React.FC = () => {
  const [trailBy, setTrailBy] = useState<'points' | 'profit'>('points');
  const [trailingMethod, setTrailingMethod] = useState<string>('trail');
  const [trailStart, setTrailStart] = useState<number>(0);
  const [trailByValue, setTrailByValue] = useState<number>(0);
  const [increaseBy, setIncreaseBy] = useState<number>(0);
  const [trailProfitBy, setTrailProfitBy] = useState<number>(0);

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faChartLine} /> 
        Profit Trailing
      </h3>
      
      <div className={styles.controlsContainer}>
        {/* Trail By Selection */}
        <div className={styles.controlGroup}>
          <h4 className={styles.controlTitle}>Trail By</h4>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.trailButton} ${trailBy === 'points' ? styles.active : ''}`}
              onClick={() => setTrailBy('points')}
            >
              Points
            </button>
            <button
              className={`${styles.trailButton} ${trailBy === 'profit' ? styles.active : ''}`}
              onClick={() => setTrailBy('profit')}
            >
              Profit
            </button>
          </div>
        </div>
        
        {/* Trailing Method Dropdown */}
        <div className={styles.controlGroup}>
          <h4 className={styles.controlTitle}>Trailing Method</h4>
          <select
            className={styles.methodSelect}
            value={trailingMethod}
            onChange={(e) => setTrailingMethod(e.target.value)}
          >
            <option value="no">No Trailing</option>
            <option value="trail">Trail Profit By</option>
            <option value="lock-trail">Lock and Trail</option>
          </select>
        </div>
      </div>
      
      {/* Trail Parameters */}
      <div className={styles.parametersRow}>
        <div className={styles.parameterGroup}>
          <label className={styles.parameterLabel}>Trail Start After ({trailBy === 'points' ? 'Points' : 'Profit'})</label>
          <input
            type="number"
            value={trailStart}
            onChange={(e) => setTrailStart(Number(e.target.value))}
            className={styles.parameterInput}
            min="0"
          />
        </div>
        
        <div className={styles.parameterGroup}>
          <label className={styles.parameterLabel}>Trail By ({trailBy === 'points' ? 'Points' : 'Profit'})</label>
          <input
            type="number"
            value={trailByValue}
            onChange={(e) => setTrailByValue(Number(e.target.value))}
            className={styles.parameterInput}
            min="0"
          />
        </div>

        {trailingMethod === 'lock-trail' && (
          <>
            <div className={styles.parameterGroup}>
              <label className={styles.parameterLabel}>Every Increase In Profit By</label>
              <input
                type="number"
                value={increaseBy}
                onChange={(e) => setIncreaseBy(Number(e.target.value))}
                className={styles.parameterInput}
                min="0"
              />
            </div>
            <div className={styles.parameterGroup}>
              <label className={styles.parameterLabel}>Trail Profit By</label>
              <input
                type="number"
                value={trailProfitBy}
                onChange={(e) => setTrailProfitBy(Number(e.target.value))}
                className={styles.parameterInput}
                min="0"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfitTrailing;