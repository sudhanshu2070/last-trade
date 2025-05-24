import { useState } from 'react';
import styles from './EntryConditions.module.css';
import { FaTrash } from 'react-icons/fa';

interface ConditionGroup {
  id: string;
  longCondition: {
    indicator: string;
    operator: string;
    value: string;
  };
  shortCondition: {
    indicator: string;
    operator: string;
    value: string;
  };
}

const EntryConditions = () => {
  const [conditionGroups, setConditionGroups] = useState<ConditionGroup[]>([{
    id: 'initial-group',
    longCondition: {
      indicator: '',
      operator: 'Crosses Above',
      value: '',
    },
    shortCondition: {
      indicator: '',
      operator: 'Crosses Above',
      value: '',
    }
  }]);

  const indicators = ['RSI', 'MACD', 'Moving Average', 'Supertrend', 'Volume'];
  const operators = ['Crosses Above', 'Crosses Below', 'Greater Than', 'Less Than', 'Equal To'];
  const valueOptions = ['RSI', 'MACD', 'Moving Average', 'Fixed Value'];

  const addConditionGroup = () => {
    const newGroup = {
      id: `group-${Date.now()}`,
      longCondition: {
        indicator: '',
        operator: 'Crosses Above',
        value: '',
      },
      shortCondition: {
        indicator: '',
        operator: 'Crosses Above',
        value: '',
      }
    };
    setConditionGroups([...conditionGroups, newGroup]);
  };

  const updateConditionGroup = (id: string, field: string, value: string, conditionType: 'long' | 'short') => {
    setConditionGroups(conditionGroups.map(group => {
      if (group.id === id) {
        return {
          ...group,
          [conditionType === 'long' ? 'longCondition' : 'shortCondition']: {
            ...group[conditionType === 'long' ? 'longCondition' : 'shortCondition'],
            [field]: value
          }
        };
      }
      return group;
    }));
  };

  const removeConditionGroup = (id: string) => {
    if (conditionGroups.length > 1) {
      setConditionGroups(conditionGroups.filter(group => group.id !== id));
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Entry Conditions</h3>
      
      {/* Condition Groups */}
      {conditionGroups.map((group) => (
        <div key={group.id} className={styles.conditionGroup}>
          {conditionGroups.length > 1 && (
            <button 
              onClick={() => removeConditionGroup(group.id)}
              className={styles.deleteButton}
              aria-label="Delete condition group"
            >
              <FaTrash className={styles.trashIcon} />
            </button>
          )}
          
          <div className={styles.conditionPair}>
            <h4 className={styles.conditionTitle}>Long Entry Condition</h4>
            <div className={styles.dropdownGroup}>
              <div className={styles.dropdown}>
                <select
                  value={group.longCondition.indicator}
                  onChange={(e) => updateConditionGroup(group.id, 'indicator', e.target.value, 'long')}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Indicator</option>
                  {indicators.map(ind => (
                    <option key={`${group.id}-long-ind-${ind}`} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={group.longCondition.operator}
                  onChange={(e) => updateConditionGroup(group.id, 'operator', e.target.value, 'long')}
                  className={styles.dropdownSelect}
                >
                  {operators.map(op => (
                    <option key={`${group.id}-long-op-${op}`} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={group.longCondition.value}
                  onChange={(e) => updateConditionGroup(group.id, 'value', e.target.value, 'long')}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Value</option>
                  {valueOptions.map(val => (
                    <option key={`${group.id}-long-val-${val}`} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className={styles.conditionPair}>
            <h4 className={styles.conditionTitle}>Short Entry Condition</h4>
            <div className={styles.dropdownGroup}>
              <div className={styles.dropdown}>
                <select
                  value={group.shortCondition.indicator}
                  onChange={(e) => updateConditionGroup(group.id, 'indicator', e.target.value, 'short')}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Indicator</option>
                  {indicators.map(ind => (
                    <option key={`${group.id}-short-ind-${ind}`} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={group.shortCondition.operator}
                  onChange={(e) => updateConditionGroup(group.id, 'operator', e.target.value, 'short')}
                  className={styles.dropdownSelect}
                >
                  {operators.map(op => (
                    <option key={`${group.id}-short-op-${op}`} value={op}>{op}</option>
                  ))}
                </select>
              </div>
              
              <div className={styles.dropdown}>
                <select
                  value={group.shortCondition.value}
                  onChange={(e) => updateConditionGroup(group.id, 'value', e.target.value, 'short')}
                  className={styles.dropdownSelect}
                >
                  <option value="">Select Value</option>
                  {valueOptions.map(val => (
                    <option key={`${group.id}-short-val-${val}`} value={val}>{val}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button 
        onClick={addConditionGroup}
        className={styles.addButton}
      >
        Add Condition +
      </button>
    </div>
  );
};

export default EntryConditions;