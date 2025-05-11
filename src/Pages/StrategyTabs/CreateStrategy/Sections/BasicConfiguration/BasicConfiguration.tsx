import React, { useEffect, useState } from 'react';
import styles from './BasicConfiguration.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

interface TimeInputProps {
  timeValue: string;
  hourValue: string;
  minuteValue: string;
  onTimeChange: (time: string) => void;
  onHourChange: (hour: string) => void;
  onMinuteChange: (minute: string) => void;
  placeholder?: string;
  label: string;
}

const TimeInput: React.FC<TimeInputProps> = ({
  timeValue,
  hourValue,
  minuteValue,
  onTimeChange,
  onHourChange,
  onMinuteChange,
  placeholder = 'HH:MM',
  label,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTimeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value === '') {
      onTimeChange('');
      onHourChange('00');
      onMinuteChange('00');
      return;
    }

    const digits = value.slice(0, 4);
    let hour = digits.slice(0, 2);
    let minute = digits.slice(2, 4);

    // Validate hours (00-23)
    if (hour.length === 2) {
      const hourNum = parseInt(hour, 10);
      if (hourNum > 23) hour = '23';
      if (hourNum < 0) hour = '00';
    }

    // Validate minutes (00-59)
    if (minute.length === 2) {
      const minuteNum = parseInt(minute, 10);
      if (minuteNum > 59) minute = '59';
      if (minuteNum < 0) minute = '00';
    }

    let formattedTime = '';
    if (digits.length > 0) {
      formattedTime = hour.padStart(2, '0');
      if (digits.length > 2) {
        formattedTime += `:${minute.padStart(2, '0')}`;
      }
    }

    onTimeChange(formattedTime);
    onHourChange(hour.padStart(2, '0'));
    onMinuteChange(minute.padStart(2, '0'));

    const inputElement = e.target;
    setTimeout(() => {
      inputElement.setSelectionRange(formattedTime.length, formattedTime.length);
    }, 0);
  };

  return (
    <div className={styles.formGroup}>
      <label htmlFor={`${label.toLowerCase().replace(' ', '-')}-time`} className={styles.label}>
        {label}
      </label>
      <div className={styles.timePickerContainer}>
        <input
          id={`${label.toLowerCase().replace(' ', '-')}-time`}
          type="text"
          value={timeValue}
          placeholder={placeholder}
          onChange={handleTimeInput}
          className={styles.input}
        />
        <span
          className={styles.clockIcon}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          🕒
        </span>
        {showDropdown && (
          <div className={styles.timeDropdown}>
            <select
              className={styles.timeSelect}
              value={hourValue}
              onChange={(e) => {
                onHourChange(e.target.value);
                onTimeChange(`${e.target.value}:${minuteValue}`);
              }}
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
              value={minuteValue}
              onChange={(e) => {
                onMinuteChange(e.target.value);
                onTimeChange(`${hourValue}:${e.target.value}`);
              }}
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
  );
};

const BasicConfiguration: React.FC = () => {
  const [orderType, setOrderType] = useState('MIS'); 
  const [executionTime, setExecutionTime] = useState('09:20');
  const [selectedHour, setSelectedHour] = useState('09');
  const [selectedMinute, setSelectedMinute] = useState('20');
  
  const [squareOffTime, setSquareOffTime] = useState('15:30');
  const [selectedSquareOffHour, setSelectedSquareOffHour] = useState('15');
  const [selectedSquareOffMinute, setSelectedSquareOffMinute] = useState('30');
  
  const [noTradeAfterTime, setNoTradeAfterTime] = useState('15:30');
  const [selectedNoTradeAfterHour, setSelectedNoTradeAfterHour] = useState('15');
  const [selectedNoTradeAfterMinute, setSelectedNoTradeAfterMinute] = useState('30');
  const [selectedDays, setSelectedDays] = useState<string[]>(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);

  // Sync executionTime with selectedHour and selectedMinute
  useEffect(() => {
    if (executionTime.includes(':')) {
      const [hour, minute] = executionTime.split(':');
      setSelectedHour(hour.padStart(2, '0'));
      setSelectedMinute(minute.padStart(2, '0'));
    }
  }, [executionTime]);

  // Trading days toggle function
  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
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

      <div className={styles.timeInputsRow}>

        <TimeInput
          label="Execution Time"
          timeValue={executionTime}
          hourValue={selectedHour}
          minuteValue={selectedMinute}
          onTimeChange={setExecutionTime}
          onHourChange={setSelectedHour}
          onMinuteChange={setSelectedMinute}
        />

        <TimeInput
          label="Square Off Time"
          timeValue={squareOffTime}
          hourValue={selectedSquareOffHour}
          minuteValue={selectedSquareOffMinute}
          onTimeChange={setSquareOffTime}
          onHourChange={setSelectedSquareOffHour}
          onMinuteChange={setSelectedSquareOffMinute}
        />

        <TimeInput
          label="No Trade After"
          timeValue={noTradeAfterTime}
          hourValue={selectedNoTradeAfterHour}
          minuteValue={selectedNoTradeAfterMinute}
          onTimeChange={setNoTradeAfterTime}
          onHourChange={setSelectedNoTradeAfterHour}
          onMinuteChange={setSelectedNoTradeAfterMinute}
        />

        {/* Trading Days Selector*/}
        <div className={styles.formGroupTradingDays}>
          <label className={styles.label}>Trading Days</label>
          <div className={styles.daysContainer}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <label key={day} className={styles.dayCheckbox}>
                <input
                  type="checkbox"
                  checked={selectedDays.includes(day)}
                  onChange={() => toggleDay(day)}
                  className={styles.checkboxInput}
                />
                <span className={styles.checkboxCustom}></span>
                {day}
              </label>
            ))}
          </div>
        </div>    
      </div>
      </div>
    </div>
  );
};

export default BasicConfiguration;