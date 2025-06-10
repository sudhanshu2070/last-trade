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

    const strikeData = {
    ITM: [
      { value: "ITM50", label: "ITM 50" },
      { value: "ITM100", label: "ITM 100" },
      { value: "ITM150", label: "ITM 150" },
      { value: "ITM200", label: "ITM 200" },
      { value: "ITM250", label: "ITM 250" },
      { value: "ITM300", label: "ITM 300" },
      { value: "ITM350", label: "ITM 350" },
      { value: "ITM400", label: "ITM 400" },
      { value: "ITM450", label: "ITM 450" },
      { value: "ITM500", label: "ITM 500" },
      { value: "ITM550", label: "ITM 550" },
      { value: "ITM600", label: "ITM 600" },
      { value: "ITM650", label: "ITM 650" },
      { value: "ITM700", label: "ITM 700" },
      { value: "ITM750", label: "ITM 750" },
      { value: "ITM800", label: "ITM 800" },
      { value: "ITM850", label: "ITM 850" },
      { value: "ITM900", label: "ITM 900" },
      { value: "ITM950", label: "ITM 950" },
      { value: "ITM1000", label: "ITM 1000" },
      { value: "ITM1050", label: "ITM 1050" },
      { value: "ITM1100", label: "ITM 1100" },
      { value: "ITM1150", label: "ITM 1150" },
      { value: "ITM1200", label: "ITM 1200" },
      { value: "ITM1250", label: "ITM 1250" },
      { value: "ITM1300", label: "ITM 1300" },
      { value: "ITM1350", label: "ITM 1350" },
      { value: "ITM1400", label: "ITM 1400" },
      { value: "ITM1450", label: "ITM 1450" },
      { value: "ITM1500", label: "ITM 1500" },
      { value: "ITM1550", label: "ITM 1550" },
      { value: "ITM1600", label: "ITM 1600" },
      { value: "ITM1650", label: "ITM 1650" },
      { value: "ITM1700", label: "ITM 1700" },
      { value: "ITM1750", label: "ITM 1750" },
      { value: "ITM1800", label: "ITM 1800" },
      { value: "ITM1850", label: "ITM 1850" },
      { value: "ITM1900", label: "ITM 1900" },
      { value: "ITM1950", label: "ITM 1950" },
      { value: "ITM2000", label: "ITM 2000" }
    ],
    ATM: [
      { value: "ATM", label: "ATM" }
    ],
    OTM: [
      { value: "OTM50", label: "OTM 50" },
      { value: "OTM100", label: "OTM 100" },
      { value: "OTM150", label: "OTM 150" },
      { value: "OTM200", label: "OTM 200" },
      { value: "OTM250", label: "OTM 250" },
      { value: "OTM300", label: "OTM 300" },
      { value: "OTM350", label: "OTM 350" },
      { value: "OTM400", label: "OTM 400" },
      { value: "OTM450", label: "OTM 450" },
      { value: "OTM500", label: "OTM 500" },
      { value: "OTM550", label: "OTM 550" },
      { value: "OTM600", label: "OTM 600" },
      { value: "OTM650", label: "OTM 650" },
      { value: "OTM700", label: "OTM 700" },
      { value: "OTM750", label: "OTM 750" },
      { value: "OTM800", label: "OTM 800" },
      { value: "OTM850", label: "OTM 850" },
      { value: "OTM900", label: "OTM 900" },
      { value: "OTM950", label: "OTM 950" },
      { value: "OTM1000", label: "OTM 1000" },
      { value: "OTM1050", label: "OTM 1050" },
      { value: "OTM1100", label: "OTM 1100" },
      { value: "OTM1150", label: "OTM 1150" },
      { value: "OTM1200", label: "OTM 1200" },
      { value: "OTM1250", label: "OTM 1250" },
      { value: "OTM1300", label: "OTM 1300" },
      { value: "OTM1350", label: "OTM 1350" },
      { value: "OTM1400", label: "OTM 1400" },
      { value: "OTM1450", label: "OTM 1450" },
      { value: "OTM1500", label: "OTM 1500" },
      { value: "OTM1550", label: "OTM 1550" },
      { value: "OTM1600", label: "OTM 1600" },
      { value: "OTM1650", label: "OTM 1650" },
      { value: "OTM1700", label: "OTM 1700" },
      { value: "OTM1750", label: "OTM 1750" },
      { value: "OTM1800", label: "OTM 1800" },
      { value: "OTM1850", label: "OTM 1850" },
      { value: "OTM1900", label: "OTM 1900" },
      { value: "OTM1950", label: "OTM 1950" },
      { value: "OTM2000", label: "OTM 2000" }
    ]
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Position Builder</h3>
      
      <div className={styles.columnsContainer}>
        {/* Column 1: Long Position */}
        {showLong && (
        <div className={`${styles.column} ${styles.longColumn}`}>
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
                <option value="ITM">ITM (In The Money)</option>
                <option value="ATM">ATM (At The Money)</option>
                <option value="OTM">OTM (Out of Money)</option>
                <option value="CP">Current Price</option>
                <option value="CPgreater">Current Price (&gt;= )</option>
                <option value="CPless">Current Price (&lt;= )</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Selection</label>

              {['CP', 'CPgreater', 'CPless'].includes(longPosition.strikeType) ? (
                <input
                  type="number"
                  value={longPosition.strikeSelection}
                  onChange={(e) => handleLongChange('strikeSelection', e.target.value)}
                  className={styles.input}
                  placeholder="Enter strike price"
                />
              ) : (
                <select
                  value={longPosition.strikeSelection}
                  onChange={(e) => handleLongChange('strikeSelection', e.target.value)}
                  className={styles.dropdown}
                >
                  {longPosition.strikeType === 'ITM' && strikeData.ITM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                    {longPosition.strikeType === 'ATM' && strikeData.ATM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                    {longPosition.strikeType === 'OTM' && strikeData.OTM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                </select>
              )}
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
                  className={styles.smallDropdownLong}
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
                  className={styles.smallDropdownLong}
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
        <div className={`${styles.column} ${styles.shortColumn}`}>
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
                <option value="ITM">ITM (In The Money)</option>
                <option value="ATM">ATM (At The Money)</option>
                <option value="OTM">OTM (Out of Money)</option>
                <option value="CP">Current Price</option>
                <option value="CPgreater">Current Price (&gt;= )</option>
                <option value="CPless">Current Price (&lt;= )</option>
              </select>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Strike Selection</label>

              {['CP', 'CPgreater', 'CPless'].includes(shortPosition.strikeType) ? (
                <input
                  type="number"
                  value={shortPosition.strikeSelection}
                  onChange={(e) => handleShortChange('strikeSelection', e.target.value)}
                  className={styles.input}
                  placeholder="Enter strike price"
                />
              ) : (
                <select
                  value={shortPosition.strikeSelection}
                  onChange={(e) => handleShortChange('strikeSelection', e.target.value)}
                  className={styles.dropdown}
                >
                  {shortPosition.strikeType === 'ITM' && strikeData.ITM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                    {shortPosition.strikeType === 'ATM' && strikeData.ATM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                    {shortPosition.strikeType === 'OTM' && strikeData.OTM.map((strike) => (
                      <option key={strike.value} value={strike.value}>
                        {strike.label}
                      </option>
                    ))}
                </select>
              )}
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
                  className={styles.smallDropdownShort}
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
                  className={styles.smallDropdownShort}
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