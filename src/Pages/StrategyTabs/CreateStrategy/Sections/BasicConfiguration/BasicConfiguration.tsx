import React, { useEffect, useState } from 'react';
import styles from './BasicConfiguration.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';


const BasicConfiguration: React.FC = () => {
  const [orderType, setOrderType] = useState('MIS'); 
  const [executionTime, setExecutionTime] = useState('');
  const [selectedHour, setSelectedHour] = useState('09');
  const [selectedMinute, setSelectedMinute] = useState('20');
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  // Sync executionTime with selectedHour and selectedMinute
  useEffect(() => {
    if (executionTime.includes(':')) {
      const [hour, minute] = executionTime.split(':');
      setSelectedHour(hour.padStart(2, '0'));
      setSelectedMinute(minute.padStart(2, '0'));
    }
  }, [executionTime]);

    // Handle manual input for executionTime
    const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9]/g, ''); // numbers only
      
      // If empty, clear everything
      if (value === '') {
        setExecutionTime('');
        setSelectedHour('00');
        setSelectedMinute('00');
        return;
      }

      // Limit to 4 digits
      const digits = value.slice(0, 4);
      
      // Determine hour and minute parts
      let hour = digits.slice(0, 2);
      let minute = digits.slice(2, 4);

      // Validate hours (00-23)
      if (hour.length === 2) {
        const hourNum = parseInt(hour, 10);
        if (hourNum > 23) {
          hour = '23';
        } else if (hourNum < 0) {
          hour = '00';
        }
      }

      // Validate minutes (00-59)
      if (minute.length === 2) {
        const minuteNum = parseInt(minute, 10);
        if (minuteNum > 59) {
          minute = '59';
        } else if (minuteNum < 0) {
          minute = '00';
        }
      }

      // Format the time string
      let formattedTime = '';
      if (digits.length > 0) {
        formattedTime = hour.padStart(2, '0');
        if (digits.length > 2) {
          formattedTime += `:${minute.padStart(2, '0')}`;
        }
      }

      // Update states
      setExecutionTime(formattedTime);
      setSelectedHour(hour.padStart(2, '0'));
      setSelectedMinute(minute.padStart(2, '0'));

      // Auto-move cursor to end after formatting
      const inputElement = e.target;
      setTimeout(() => {
        inputElement.setSelectionRange(formattedTime.length, formattedTime.length);
      }, 0);
    };


  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faSliders} />      
        Basic Configuration
      </h3>
      
      <div className={styles.formGrid}>

        <div className={styles.formGroup}>
          <label htmlFor="strategyType" className={styles.label}>
            Strategy Type
          </label>
          <select id="strategyType" className={styles.input}>
            {/* <option value="">Select strategy type</option> */}
            <option value="momentum">Time Based</option>
            <option value="momentum">Indicator</option>
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
            {/* <option value="">Select instrument</option> */}
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

        {/* New Time Picker Field */}
        <div className={styles.formGroup}>
          <label htmlFor="executionTime" className={styles.label}>
            Execution Time
          </label>
            <div className={styles.timePickerContainer}>
            <input
              id="executionTime"
              type="text"
              // pattern="^([01]\d|2[0-3]):([0-5]\d)$"
              value={executionTime}
              placeholder="HH:MM"
              onChange={handleTimeInput}
              className={styles.input}
            />
            <span
              className={styles.clockIcon}
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            >
              🕒
            </span>
            {showTimeDropdown && (
              <div className={styles.timeDropdown}>
              <select
                className={styles.timeSelect}
                value={selectedHour}
                onChange={(e) => setSelectedHour(e.target.value)}
              >
                {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
                ))}
              </select>
              <span className={styles.timeSeparator}>:</span>
              <select
                className={styles.timeSelect}
                value={selectedMinute}
                onChange={(e) => setSelectedMinute(e.target.value)}
              >
                {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, '0')}>
                  {String(i).padStart(2, '0')}
                </option>
                ))}
              </select>
              </div>
            )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BasicConfiguration;