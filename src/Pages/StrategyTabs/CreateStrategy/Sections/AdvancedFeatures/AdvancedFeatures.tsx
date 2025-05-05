import React, { useState } from 'react';
import styles from './AdvancedFeatures.module.css';

const AdvancedFeatures: React.FC = () => {
  const [settings, setSettings] = useState({
    trailingStopLoss: false,
    autoHedge: false,
    priceDeviation: '2',
    timeRestriction: false,
    startTime: '09:15',
    endTime: '15:15'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>🔧</span> Advanced Features
      </h3>
      
      <div className={styles.featuresGrid}>
        <div className={styles.featureToggle}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              name="trailingStopLoss"
              checked={settings.trailingStopLoss}
              onChange={handleChange}
              className={styles.toggleInput}
            />
            <span className={styles.toggleSlider}></span>
            <span className={styles.toggleText}>Trailing Stop Loss</span>
          </label>
          {settings.trailingStopLoss && (
            <div className={styles.toggleContent}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Activation Price (%)</label>
                <input
                  type="number"
                  name="priceDeviation"
                  value={settings.priceDeviation}
                  onChange={handleChange}
                  className={styles.input}
                  min="0.1"
                  step="0.1"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className={styles.featureToggle}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              name="autoHedge"
              checked={settings.autoHedge}
              onChange={handleChange}
              className={styles.toggleInput}
            />
            <span className={styles.toggleSlider}></span>
            <span className={styles.toggleText}>Auto Hedge Positions</span>
          </label>
        </div>
        
        <div className={styles.featureToggle}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              name="timeRestriction"
              checked={settings.timeRestriction}
              onChange={handleChange}
              className={styles.toggleInput}
            />
            <span className={styles.toggleSlider}></span>
            <span className={styles.toggleText}>Time Restriction</span>
          </label>
          {settings.timeRestriction && (
            <div className={styles.toggleContent}>
              <div className={styles.timeRange}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>From</label>
                  <input
                    type="time"
                    name="startTime"
                    value={settings.startTime}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>To</label>
                  <input
                    type="time"
                    name="endTime"
                    value={settings.endTime}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedFeatures;