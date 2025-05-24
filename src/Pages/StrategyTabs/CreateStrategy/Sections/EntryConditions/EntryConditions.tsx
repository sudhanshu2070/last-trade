import { useState } from 'react';
import styles from './EntryConditions.module.css';

interface Condition {
  id: string;
  indicator: string;
  operator: string;
  value: string;
  logic: 'AND' | 'OR';
}

const EntryConditions = () => {
  const [longConditions, setLongConditions] = useState<Condition[]>([]);
  const [shortConditions, setShortConditions] = useState<Condition[]>([]);
  const [newLongCondition, setNewLongCondition] = useState<Omit<Condition, 'id'>>({
    indicator: '',
    operator: 'Crosses Above',
    value: '',
    logic: 'AND'
  });
  const [newShortCondition, setNewShortCondition] = useState<Omit<Condition, 'id'>>({
    indicator: '',
    operator: 'Crosses Above',
    value: '',
    logic: 'AND'
  });

  const indicators = ['RSI', 'MACD', 'SMA', 'EMA', 'Bollinger Bands', 'Stochastic'];
  const operators = ['Crosses Above', 'Crosses Below', 'Greater Than', 'Less Than'];
  const valueOptions = ['0', '20', '50', '80', '100', 'Custom...'];

  const addCondition = (type: 'long' | 'short' | 'both') => {
    const timestamp = Date.now().toString();
    
    if (type === 'long' || type === 'both') {
      const newCondition = {
        ...newLongCondition,
        id: `long-${timestamp}`
      };
      setLongConditions([...longConditions, newCondition]);
      setNewLongCondition({
        indicator: '',
        operator: 'Crosses Above',
        value: '',
        logic: 'AND'
      });
    }
    
    if (type === 'short' || type === 'both') {
      const newCondition = {
        ...newShortCondition,
        id: `short-${timestamp}`
      };
      setShortConditions([...shortConditions, newCondition]);
      setNewShortCondition({
        indicator: '',
        operator: 'Crosses Above',
        value: '',
        logic: 'AND'
      });
    }
  };

  const updateCondition = (type: 'long' | 'short', id: string, field: string, value: string) => {
    const setter = type === 'long' ? setLongConditions : setShortConditions;
    const conditions = type === 'long' ? longConditions : shortConditions;
    
    setter(conditions.map(cond => 
      cond.id === id ? { ...cond, [field]: value } : cond
    ));
  };

  const removeCondition = (type: 'long' | 'short', id: string) => {
    const setter = type === 'long' ? setLongConditions : setShortConditions;
    const conditions = type === 'long' ? longConditions : shortConditions;
    
    setter(conditions.filter(cond => cond.id !== id));
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Entry Conditions</h3>
      
      <div className={styles.conditionsContainer}>
        {/* Long Entry Conditions */}
        <div className={styles.conditionGroup}>
          <h4 className={styles.conditionTitle}>Long Entry Condition</h4>
          
          <div className={styles.conditionForm}>
            <div className={styles.dropdownGroup}>
              <div className={styles.dropdown}>
                <select
                  value={newLongCondition.indicator}
                  onChange={(e) => setNewLongCondition({...newLongCondition, indicator: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Indicator</option>
                  {indicators.map(ind => (
                    <option key={`long-ind-${ind}`} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={newLongCondition.operator}
                  onChange={(e) => setNewLongCondition({...newLongCondition, operator: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  {operators.map(op => (
                    <option key={`long-op-${op}`} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={newLongCondition.value}
                  onChange={(e) => setNewLongCondition({...newLongCondition, value: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Value</option>
                  {valueOptions.map(val => (
                    <option key={`long-val-${val}`} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Existing Long Conditions */}
          {longConditions.map((cond, index) => (
            <div key={cond.id} className={styles.existingCondition}>
              {index > 0 && (
                <select
                  value={cond.logic}
                  onChange={(e) => updateCondition('long', cond.id, 'logic', e.target.value as 'AND' | 'OR')}
                  className={styles.logicSelect}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              )}
              <span className={styles.conditionText}>
                {cond.indicator} {cond.operator} {cond.value}
              </span>
              <button 
                onClick={() => removeCondition('long', cond.id)}
                className={styles.removeButton}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        
        {/* Short Entry Conditions */}
        <div className={styles.conditionGroup}>
          <h4 className={styles.conditionTitle}>Short Entry Condition</h4>
          
          <div className={styles.conditionForm}>
            <div className={styles.dropdownGroup}>
              <div className={styles.dropdown}>
                <select
                  value={newShortCondition.indicator}
                  onChange={(e) => setNewShortCondition({...newShortCondition, indicator: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Indicator</option>
                  {indicators.map(ind => (
                    <option key={`short-ind-${ind}`} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={newShortCondition.operator}
                  onChange={(e) => setNewShortCondition({...newShortCondition, operator: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  {operators.map(op => (
                    <option key={`short-op-${op}`} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={newShortCondition.value}
                  onChange={(e) => setNewShortCondition({...newShortCondition, value: e.target.value})}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Value</option>
                  {valueOptions.map(val => (
                    <option key={`short-val-${val}`} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          {/* Existing Short Conditions */}
          {shortConditions.map((cond, index) => (
            <div key={cond.id} className={styles.existingCondition}>
              {index > 0 && (
                <select
                  value={cond.logic}
                  onChange={(e) => updateCondition('short', cond.id, 'logic', e.target.value as 'AND' | 'OR')}
                  className={styles.logicSelect}
                >
                  <option value="AND">AND</option>
                  <option value="OR">OR</option>
                </select>
              )}
              <span className={styles.conditionText}>
                {cond.indicator} {cond.operator} {cond.value}
              </span>
              <button 
                onClick={() => removeCondition('short', cond.id)}
                className={styles.removeButton}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.actionButtons}>
        <button 
          onClick={() => addCondition('long')} 
          className={styles.addButton}
          disabled={!newLongCondition.indicator || !newLongCondition.value}
        >
          Add Long Condition
        </button>
        <button 
          onClick={() => addCondition('short')} 
          className={styles.addButton}
          disabled={!newShortCondition.indicator || !newShortCondition.value}
        >
          Add Short Condition
        </button>
        <button 
          onClick={() => addCondition('both')} 
          className={styles.addButton}
          disabled={(!newLongCondition.indicator || !newLongCondition.value) && 
                    (!newShortCondition.indicator || !newShortCondition.value)}
        >
          Add Both Conditions
        </button>
      </div>
    </div>
  );
};

export default EntryConditions;