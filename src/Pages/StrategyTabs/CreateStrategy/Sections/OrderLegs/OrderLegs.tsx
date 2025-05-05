import React, { useState } from 'react';
import styles from './OrderLegs.module.css';
import { FiPlus, FiX } from 'react-icons/fi';

const OrderLegs: React.FC = () => {
  const [legs, setLegs] = useState([
    { id: 1, type: 'BUY', instrument: 'NIFTY 50', quantity: 50, orderType: 'MARKET' }
  ]);

  const addLeg = () => {
    setLegs([...legs, { 
      id: Date.now(), 
      type: 'BUY', 
      instrument: '', 
      quantity: 1, 
      orderType: 'LIMIT' 
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
        <span>🧩</span> Order Legs
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
                  <FiX />
                </button>
              )}
            </div>
            
            <div className={styles.legForm}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Type</label>
                <select
                  value={leg.type}
                  onChange={(e) => updateLeg(leg.id, 'type', e.target.value)}
                  className={styles.input}
                >
                  <option value="BUY">BUY</option>
                  <option value="SELL">SELL</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Instrument</label>
                <select
                  value={leg.instrument}
                  onChange={(e) => updateLeg(leg.id, 'instrument', e.target.value)}
                  className={styles.input}
                >
                  <option value="">Select instrument</option>
                  <option value="NIFTY 50">NIFTY 50</option>
                  <option value="BANKNIFTY">BANKNIFTY</option>
                  <option value="FINNIFTY">FINNIFTY</option>
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
                <label className={styles.label}>Order Type</label>
                <select
                  value={leg.orderType}
                  onChange={(e) => updateLeg(leg.id, 'orderType', e.target.value)}
                  className={styles.input}
                >
                  <option value="MARKET">MARKET</option>
                  <option value="LIMIT">LIMIT</option>
                  <option value="SL">STOP LOSS</option>
                  <option value="SL-M">SL-MARKET</option>
                </select>
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