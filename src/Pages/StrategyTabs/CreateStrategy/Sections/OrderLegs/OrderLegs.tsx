import React, { useState } from 'react';
import styles from './OrderLegs.module.css';
import { FiPlus } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderLegs: React.FC = () => {
  const [legs, setLegs] = useState([
    { id: 1, type: 'BUY', instrument: 'NIFTY 50', quantity: 50, expiryType : 'weekly',  orderType: 'MARKET', optionType: 'CALL', strikeType: '', slType: 'points', stopLoss: 30, targetType: 'points', target: 60 }
  ]);

  const addLeg = () => {
    setLegs([...legs, { 
      id: legs.length > 0 ? legs[legs.length - 1].id + 1 : 1, 
      type: 'BUY', 
      instrument: '',
      expiryType: 'weekly', 
      quantity: 1, 
      orderType: 'LIMIT',
      optionType: 'CALL',
      strikeType: '',
      slType: 'points',
      stopLoss: 30,
      targetType: 'points',
      target: 60
    }]);
  };

  const removeLeg = (id: number) => {
    if (legs.length > 1) {
      setLegs(legs.filter(leg => leg.id !== id));
    }
  };

  const updateLeg = (id: number, field: string, value: string) => {
    setLegs(legs.map(leg => 
      leg.id === id ? { ...leg, [field]: value } : leg
    ));
  };

  const strikeData = {
    ITM: [
      { value: "ITM2000", label: "ITM 2000" },
      { value: "ITM1950", label: "ITM 1950" },
      { value: "ITM1900", label: "ITM 1900" },
      { value: "ITM1850", label: "ITM 1850" },
      { value: "ITM1800", label: "ITM 1800" },
      { value: "ITM1750", label: "ITM 1750" },
      { value: "ITM1700", label: "ITM 1700" },
      { value: "ITM1650", label: "ITM 1650" },
      { value: "ITM1600", label: "ITM 1600" },
      { value: "ITM1550", label: "ITM 1550" },
      { value: "ITM1500", label: "ITM 1500" },
      { value: "ITM1450", label: "ITM 1450" },
      { value: "ITM1400", label: "ITM 1400" },
      { value: "ITM1350", label: "ITM 1350" },
      { value: "ITM1300", label: "ITM 1300" },
      { value: "ITM1250", label: "ITM 1250" }
    ],
    ATM: [
      { value: "ATM", label: "At The Money" }
    ],
    OTM: [
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
    ]
  };

  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faLayerGroup} />
          Order Legs
        </h3>
        <button className={styles.addLegButton} onClick={addLeg}>
          <FiPlus /> Add Leg
        </button>
      </div>
      
      <div className={styles.legsContainer}>
        {legs.map((leg) => (
          <div key={leg.id} className={styles.legCard}>
            <div className={styles.legHeader}>
              <h4 className={styles.legTitle}>Leg {leg.id}</h4>
              {legs.length > 1 && (
                <button 
                  className={styles.removeLegButton}
                  onClick={() => removeLeg(leg.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              )}
            </div>
            
            <div className={styles.legForm}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Type</label>
                <div className={styles.actionButtonGroup}>
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.buyButton} ${leg.type === 'BUY' ? styles.active : ''}`}
                    onClick={() => updateLeg(leg.id, 'type', 'BUY')}
                  >
                    ↑ BUY
                  </button>
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.sellButton} ${leg.type === 'SELL' ? styles.active : ''}`}
                    onClick={() => updateLeg(leg.id, 'type', 'SELL')}
                  >
                    ↓ SELL
                  </button>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Expiry</label>
                <select
                  value={leg.expiryType || 'weekly'}
                  onChange={(e) => updateLeg(leg.id, 'expiryType', e.target.value)}
                  className={styles.input}
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Quantity</label>
                <input
                  type="number"
                  min="1"
                  value={leg.quantity}
                  onChange={(e) => updateLeg(leg.id, 'quantity', e.target.value)}
                  className={styles.input}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Option Type</label>
                <div className={styles.actionButtonGroup}>
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.callButton} ${leg.optionType === 'CALL' ? styles.active : ''}`}
                    onClick={() => updateLeg(leg.id, 'optionType', 'CALL')}
                  >
                    CALL
                  </button>
                  <button
                    type="button"
                    className={`${styles.actionButton} ${styles.putButton} ${leg.optionType === 'PUT' ? styles.active : ''}`}
                    onClick={() => updateLeg(leg.id, 'optionType', 'PUT')}
                  >
                    PUT
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Strike Type</label>
                <select
                  value={leg.strikeType}
                  onChange={(e) => updateLeg(leg.id, 'strikeType', e.target.value)}
                  className={styles.input}
                >
                  <option value="">Select Strike Type</option>
                  <option value="ITM">ITM (In The Money)</option>
                  <option value="ATM">ATM (At The Money)</option>
                  <option value="OTM">OTM (Out of Money)</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Strike Selection</label>
                <select
                  value={leg.instrument}
                  onChange={(e) => updateLeg(leg.id, 'instrument', e.target.value)}
                  className={styles.input}
                  disabled={!leg.strikeType}
                >
                  <option value="">Select {leg.strikeType} Strike</option>
                  {leg.strikeType === 'ITM' && strikeData.ITM.map((strike) => (
                    <option key={strike.value} value={strike.value}>
                      {strike.label}
                    </option>
                  ))}
                  {leg.strikeType === 'ATM' && strikeData.ATM.map((strike) => (
                    <option key={strike.value} value={strike.value}>
                      {strike.label}
                    </option>
                  ))}
                  {leg.strikeType === 'OTM' && strikeData.OTM.map((strike) => (
                    <option key={strike.value} value={strike.value}>
                      {strike.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Stop Loss</label>
                <div className={styles.slTargetWrapper}>
                  <div className={styles.slTargetContainer}>
                    <select
                      value={leg.slType || 'points'}
                      onChange={(e) => updateLeg(leg.id, 'slType', e.target.value)}
                      className={styles.slTargetSelect}
                    >
                      <option value="points">Points</option>
                      <option value="percent">%</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      value={leg.stopLoss || ''}
                      onChange={(e) => updateLeg(leg.id, 'stopLoss', e.target.value)}
                      className={styles.slTargetInput}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Target</label>
                <div className={styles.slTargetWrapper}>
                  <div className={styles.slTargetContainer}>
                    <select
                      value={leg.targetType || 'points'}
                      onChange={(e) => updateLeg(leg.id, 'targetType', e.target.value)}
                      className={styles.slTargetSelect}
                    >
                      <option value="points">Points</option>
                      <option value="percent">%</option>
                    </select>
                    <input
                      type="number"
                      min="1"
                      value={leg.target || ''}
                      onChange={(e) => updateLeg(leg.id, 'target', e.target.value)}
                      className={styles.slTargetInput}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLegs;