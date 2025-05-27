import { useState } from 'react';
import styles from './PositionBuilder.module.css';

interface PositionBuilderProps {
showLong?: boolean;
showShort?: boolean;
}

const PositionBuilder:React.FC<PositionBuilderProps> = ({showLong = true, showShort= true}) => {
  // State for Long Position
  const [longPosition, setLongPosition] = useState({
    action: 'Buy',
    optionType: 'CE (Call)',
    quantity: '1',
    expiry: 'Nearest Expiry',
    strikeType: 'ATM',
    strikeSelection: 'Automatic',
    target: '10',
    targetType: 'Points',
    stopLoss: '5',
    stopLossType: 'Points'
  });

  // State for Short Position
  const [shortPosition, setShortPosition] = useState({
    action: 'Buy',
    optionType: 'PE (Put)',
    quantity: '1',
    expiry: 'Nearest Expiry',
    strikeType: 'ATM',
    strikeSelection: 'Automatic',
    target: '10',
    targetType: 'Points',
    stopLoss: '5',
    stopLossType: 'Points'
  });

  const handleLongChange = (field: string, value: string) => {
    setLongPosition(prev => ({ ...prev, [field]: value }));
  };

  const handleShortChange = (field: string, value: string) => {
    setShortPosition(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Position Builder</h3>
      
      <div className={styles.columnsContainer}>
        {/* Column 1: Long Position */}
        {showLong && (
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>When Long Condition Met</h4>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Action</label>
              <select
                value={longPosition.action}
                onChange={(e) => handleLongChange('action', e.target.value)}
                className={styles.dropdown}
              >
                <option>Buy</option>
                <option>Sell</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Option Type</label>
              <select
                value={longPosition.optionType}
                onChange={(e) => handleLongChange('optionType', e.target.value)}
                className={styles.dropdown}
              >
                <option>CE (Call)</option>
                <option>PE (Put)</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Quantity</label>
              <input
                type="number"
                value={longPosition.quantity}
                onChange={(e) => handleLongChange('quantity', e.target.value)}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Expiry</label>
              <select
                value={longPosition.expiry}
                onChange={(e) => handleLongChange('expiry', e.target.value)}
                className={styles.dropdown}
              >
                <option>Nearest Expiry</option>
                <option>Weekly Expiry</option>
                <option>Monthly Expiry</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Type</label>
              <select
                value={longPosition.strikeType}
                onChange={(e) => handleLongChange('strikeType', e.target.value)}
                className={styles.dropdown}
              >
                <option>ATM</option>
                <option>ITM</option>
                <option>OTM</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Selection</label>
              <select
                value={longPosition.strikeSelection}
                onChange={(e) => handleLongChange('strikeSelection', e.target.value)}
                className={styles.dropdown}
              >
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Target</label>
              <div className={styles.inputWithDropdown}>
                <input
                  type="number"
                  value={longPosition.target}
                  onChange={(e) => handleLongChange('target', e.target.value)}
                  className={styles.input}
                />
                <select
                  value={longPosition.targetType}
                  onChange={(e) => handleLongChange('targetType', e.target.value)}
                  className={styles.smallDropdown}
                >
                  <option>Points</option>
                  <option>Percent</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Stop Loss</label>
              <div className={styles.inputWithDropdown}>
                <input
                  type="number"
                  value={longPosition.stopLoss}
                  onChange={(e) => handleLongChange('stopLoss', e.target.value)}
                  className={styles.input}
                />
                <select
                  value={longPosition.stopLossType}
                  onChange={(e) => handleLongChange('stopLossType', e.target.value)}
                  className={styles.smallDropdown}
                >
                  <option>Points</option>
                  <option>Percent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        )}
        
        {/* Column 2: Short Position */}
        {showShort &&(
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>When Short Condition Met</h4>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Action</label>
              <select
                value={shortPosition.action}
                onChange={(e) => handleShortChange('action', e.target.value)}
                className={styles.dropdown}
              >
                <option>Buy</option>
                <option>Sell</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Option Type</label>
              <select
                value={shortPosition.optionType}
                onChange={(e) => handleShortChange('optionType', e.target.value)}
                className={styles.dropdown}
              >
                <option>PE (Put)</option>
                <option>CE (Call)</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Quantity</label>
              <input
                type="number"
                value={shortPosition.quantity}
                onChange={(e) => handleShortChange('quantity', e.target.value)}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Expiry</label>
              <select
                value={shortPosition.expiry}
                onChange={(e) => handleShortChange('expiry', e.target.value)}
                className={styles.dropdown}
              >
                <option>Nearest Expiry</option>
                <option>Weekly Expiry</option>
                <option>Monthly Expiry</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Type</label>
              <select
                value={shortPosition.strikeType}
                onChange={(e) => handleShortChange('strikeType', e.target.value)}
                className={styles.dropdown}
              >
                <option>ATM</option>
                <option>ITM</option>
                <option>OTM</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Selection</label>
              <select
                value={shortPosition.strikeSelection}
                onChange={(e) => handleShortChange('strikeSelection', e.target.value)}
                className={styles.dropdown}
              >
                <option>Automatic</option>
                <option>Manual</option>
              </select>
            </div>
          </div>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Target</label>
              <div className={styles.inputWithDropdown}>
                <input
                  type="number"
                  value={shortPosition.target}
                  onChange={(e) => handleShortChange('target', e.target.value)}
                  className={styles.input}
                />
                <select
                  value={shortPosition.targetType}
                  onChange={(e) => handleShortChange('targetType', e.target.value)}
                  className={styles.smallDropdown}
                >
                  <option>Points</option>
                  <option>Percent</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Stop Loss</label>
              <div className={styles.inputWithDropdown}>
                <input
                  type="number"
                  value={shortPosition.stopLoss}
                  onChange={(e) => handleShortChange('stopLoss', e.target.value)}
                  className={styles.input}
                />
                <select
                  value={shortPosition.stopLossType}
                  onChange={(e) => handleShortChange('stopLossType', e.target.value)}
                  className={styles.smallDropdown}
                >
                  <option>Points</option>
                  <option>Percent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        )}
        
      </div>
    </div>
  );
};

export default PositionBuilder;