import { useState } from 'react';
import styles from './ExitConditions.module.css';
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

const ExitConditions = () => {
  const [conditionGroups, setConditionGroups] = useState<ConditionGroup[]>([{
    id: 'initial-exit-group',
    longCondition: { indicator: '', operator: 'Crosses Above', value: '' },
    shortCondition: { indicator: '', operator: 'Crosses Above', value: '' }
  }]);

  const [toggles, setToggles] = useState<string[]>([]); // holds "AND"/"OR" strings between condition groups

  const indicators = ['RSI', 'MACD', 'Moving Average', 'Supertrend', 'Volume'];
  const operators = ['Crosses Above', 'Crosses Below', 'Greater Than', 'Less Than', 'Equal To'];
  const valueOptions = ['RSI', 'MACD', 'Moving Average', 'Fixed Value'];

  const addConditionGroup = () => {
    const newGroup = {
      id: `exit-group-${Date.now()}`,
      longCondition: { indicator: '', operator: 'Crosses Above', value: '' },
      shortCondition: { indicator: '', operator: 'Crosses Above', value: '' }
    };
    setConditionGroups(prev => [...prev, newGroup]);
    setToggles(prev => [...prev, 'AND']); // Default toggle
  };

    const updateToggleValue = (index: number, value: 'AND' | 'OR') => {
        const newToggles = [...toggles];
        newToggles[index] = value;
        setToggles(newToggles);
    };

  const updateConditionGroup = (id: string, field: string, value: string, conditionType: 'long' | 'short') => {
    setConditionGroups(groups =>
      groups.map(group =>
        group.id === id
          ? {
              ...group,
              [conditionType === 'long' ? 'longCondition' : 'shortCondition']: {
                ...group[conditionType === 'long' ? 'longCondition' : 'shortCondition'],
                [field]: value
              }
            }
          : group
      )
    );
  };

  const removeConditionGroup = (id: string) => {
    const index = conditionGroups.findIndex(group => group.id === id);
    if (conditionGroups.length > 1) {
      const newGroups = conditionGroups.filter(group => group.id !== id);
      const newToggles = [...toggles];
      if (index > 0) {
        newToggles.splice(index - 1, 1);
      } else {
        newToggles.splice(0, 1);
      }
      setConditionGroups(newGroups);
      setToggles(newToggles);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Exit Conditions</h3>

      {conditionGroups.map((group, index) => (
        <div key={group.id}>
          {index > 0 && (
            <div className={styles.toggleWrapper}>
                <div className={styles.toggleContainer}>
                <button
                    className={`${styles.toggleButton} ${styles.leftButton} ${
                    toggles[index - 1] === 'AND' ? styles.selected : ''
                    }`}
                    onClick={() => updateToggleValue(index - 1, 'AND')}
                >
                    AND
                </button>
                <button
                    className={`${styles.toggleButton} ${styles.rightButton} ${
                    toggles[index - 1] === 'OR' ? styles.selected : ''
                    }`}
                    onClick={() => updateToggleValue(index - 1, 'OR')}
                >
                    OR
                </button>
                </div>
            </div>
            )}

          <div className={styles.conditionGroup}>
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
              <h4 className={styles.conditionTitle}>Long Exit Condition</h4>
              <div className={styles.dropdownGroup}>
                <div className={styles.dropdown}>
                  <select
                    value={group.longCondition.indicator}
                    onChange={(e) => updateConditionGroup(group.id, 'indicator', e.target.value, 'long')}
                    className={styles.dropdownSelect}
                  >
                    <option value="">Select Indicator</option>
                    {indicators.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
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
                      <option key={op} value={op}>{op}</option>
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
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.conditionPair}>
              <h4 className={styles.conditionTitle}>Short Exit Condition</h4>
              <div className={styles.dropdownGroup}>
                <div className={styles.dropdown}>
                  <select
                    value={group.shortCondition.indicator}
                    onChange={(e) => updateConditionGroup(group.id, 'indicator', e.target.value, 'short')}
                    className={styles.dropdownSelect}
                  >
                    <option value="">Select Indicator</option>
                    {indicators.map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
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
                      <option key={op} value={op}>{op}</option>
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
                      <option key={val} value={val}>{val}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button onClick={addConditionGroup} className={styles.addButton}>
        Add Condition +
      </button>
    </div>
  );
};

export default ExitConditions;