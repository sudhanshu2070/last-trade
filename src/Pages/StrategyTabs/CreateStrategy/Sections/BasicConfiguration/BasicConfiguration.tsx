import React, { useState } from 'react';
import styles from './BasicConfiguration.module.css';

const BasicConfiguration: React.FC = () => {
  const [orderType, setOrderType] = useState('MIS'); 

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>⚙️</span> Basic Configuration
      </h3>
      
      <div className={styles.formGrid}>

        <div className={styles.formGroup}>
          <label htmlFor="strategyType" className={styles.label}>
            Strategy Type
          </label>
          <select id="strategyType" className={styles.input}>
            <option value="">Select strategy type</option>
            <option value="momentum">Momentum</option>
            <option value="mean-reversion">Mean Reversion</option>
            <option value="breakout">Breakout</option>
            <option value="arbitrage">Arbitrage</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="instrument" className={styles.label}>
            Instrument
          </label>
          <select id="instrument" className={styles.input}>
            <option value="">Select instrument</option>
            <option value="nifty50">NIFTY 50</option>
            <option value="banknifty">BANKNIFTY</option>
            <option value="finnifty">FINNIFTY</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Order Type</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="orderType"
                value="MIS"
                checked={orderType === 'MIS'}
                onChange={(e) => setOrderType(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              MIS
            </label>
            
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="orderType"
                value="CNC"
                checked={orderType === 'CNC'}
                onChange={(e) => setOrderType(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              CNC
            </label>
            
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="orderType"
                value="BTST"
                checked={orderType === 'BTST'}
                onChange={(e) => setOrderType(e.target.value)}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              BTST
            </label>
          </div>
        </div>


        <div className={styles.formGroup}>
          <label htmlFor="strategyName" className={styles.label}>
            Strategy Name
          </label>
          <input
            id="strategyName"
            type="text"
            className={styles.input}
            placeholder="Golden Cross Momentum"
          />
        </div>
        
        
        

        
        <div className={styles.formGroup}>
          <label htmlFor="timeframe" className={styles.label}>
            Timeframe
          </label>
          <select id="timeframe" className={styles.input}>
            <option value="">Select timeframe</option>
            <option value="5min">5 Minute</option>
            <option value="15min">15 Minute</option>
            <option value="1hour">1 Hour</option>
            <option value="1day">1 Day</option>
          </select>
        </div>
      </div>
      
      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Description
        </label>
        <textarea
          id="description"
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Describe your strategy rules and objectives..."
          rows={4}
        />
      </div>
    </div>
  );
};

export default BasicConfiguration;