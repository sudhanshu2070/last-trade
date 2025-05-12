import React, { useState } from 'react';
import styles from './OrderLegs.module.css';
import { FiPlus } from 'react-icons/fi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faTrash } from '@fortawesome/free-solid-svg-icons';

const OrderLegs: React.FC = () => {
  const [legs, setLegs] = useState([
    { id: 1, type: 'BUY', instrument: 'NIFTY 50', quantity: 50, orderType: 'MARKET', optionType: 'CALL', stopLoss: 30, target: 60 }
  ]);

  const addLeg = () => {
    setLegs([...legs, { 
      id: legs.length > 0 ? legs[legs.length - 1].id + 1 : 1, 
      type: 'BUY', 
      instrument: '', 
      quantity: 1, 
      orderType: 'LIMIT',
      optionType: 'CALL',
      stopLoss: 30,
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

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <FontAwesomeIcon icon={faLayerGroup} />
        Order Legs
      </h3>
      
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
                <label className={styles.label}>Strike Selection</label>
                <select
                  value={leg.instrument}
                  onChange={(e) => updateLeg(leg.id, 'instrument', e.target.value)}
                  className={styles.input}
                >
                    <option value="ATM">ATM</option>
                    <option value="ITM1">ITM1</option>
                    <option value="ITM2">ITM2</option>
                    <option value="OTM1">OTM1</option>
                    <option value="OTM2">OTM2</option>
                </select>
              </div>
              
                <div className={styles.formGroup}>
                <label className={styles.label}>Stop Loss (Points)</label>
                <input
                  type="number"
                  min="1"
                  value={leg.stopLoss || ''}
                  onChange={(e) => updateLeg(leg.id, 'stopLoss', e.target.value)}
                  className={styles.input}
                />
                </div>

                <div className={styles.formGroup}>
                <label className={styles.label}>Target (Points)</label>
                <input
                  type="number"
                  min="1"
                  value={leg.target || ''}
                  onChange={(e) => updateLeg(leg.id, 'target', e.target.value)}
                  className={styles.input}
                />
                </div>

            </div>
          </div>
        ))}
      </div>
      
      <button className={styles.addLegButton} onClick={addLeg}>
        <FiPlus /> Add Order Leg
      </button>
    </div>
  );
};

export default OrderLegs;