import React, { useState } from 'react';
import styles from './CreateStrategy.module.css';
import { FiPlus, FiX, FiChevronDown, FiInfo } from 'react-icons/fi';

const CreateStrategy: React.FC = () => {
  const [strategyName, setStrategyName] = useState('');
  const [strategyType, setStrategyType] = useState('');
  const [description, setDescription] = useState('');
  const [rules, setRules] = useState([{ id: 1, condition: '', action: '' }]);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const addRule = () => {
    setRules([...rules, { id: Date.now(), condition: '', action: '' }]);
  };

  const removeRule = (id: number) => {
    if (rules.length > 1) {
      setRules(rules.filter(rule => rule.id !== id));
    }
  };

  const updateRule = (id: number, field: string, value: string) => {
    setRules(rules.map(rule => 
      rule.id === id ? { ...rule, [field]: value } : rule
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ strategyName, strategyType, description, rules });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Trading Strategy</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="strategyName" className={styles.label}>
            Strategy Name
            <span className={styles.required}>*</span>
          </label>
          <input
            id="strategyName"
            type="text"
            value={strategyName}
            onChange={(e) => setStrategyName(e.target.value)}
            className={styles.input}
            placeholder="e.g. Golden Cross Momentum"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="strategyType" className={styles.label}>
            Strategy Type
            <span className={styles.required}>*</span>
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="strategyType"
              value={strategyType}
              onChange={(e) => setStrategyType(e.target.value)}
              className={styles.select}
              required
            >
              <option value="">Select a strategy type</option>
              <option value="mean-reversion">Mean Reversion</option>
              <option value="momentum">Momentum</option>
              <option value="breakout">Breakout</option>
              <option value="arbitrage">Arbitrage</option>
            </select>
            <FiChevronDown className={styles.selectArrow} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
            placeholder="Briefly describe your strategy..."
            rows={3}
          />
        </div>

        <div className={styles.rulesSection}>
          <div className={styles.sectionHeader}>
            <h3 className={styles.sectionTitle}>Trading Rules</h3>
            <button
              type="button"
              onClick={addRule}
              className={styles.addButton}
            >
              <FiPlus /> Add Rule
            </button>
          </div>

          {rules.map((rule) => (
            <div key={rule.id} className={styles.ruleContainer}>
              <div className={styles.ruleInputs}>
                <div className={styles.ruleInputGroup}>
                  <span className={styles.ruleLabel}>When</span>
                  <input
                    type="text"
                    value={rule.condition}
                    onChange={(e) => updateRule(rule.id, 'condition', e.target.value)}
                    className={styles.ruleInput}
                    placeholder="Condition (e.g. RSI < 30)"
                  />
                </div>
                <div className={styles.ruleInputGroup}>
                  <span className={styles.ruleLabel}>Then</span>
                  <input
                    type="text"
                    value={rule.action}
                    onChange={(e) => updateRule(rule.id, 'action', e.target.value)}
                    className={styles.ruleInput}
                    placeholder="Action (e.g. Buy 100 shares)"
                  />
                </div>
              </div>
              {rules.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeRule(rule.id)}
                  className={styles.removeButton}
                >
                  <FiX />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.advancedSection}>
          <button
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={styles.advancedToggle}
          >
            {showAdvanced ? 'Hide Advanced Options' : 'Show Advanced Options'}
            <FiChevronDown className={`${styles.advancedArrow} ${showAdvanced ? styles.rotated : ''}`} />
          </button>

          {showAdvanced && (
            <div className={styles.advancedContent}>
              <div className={styles.formGroup}>
                <label htmlFor="riskPercentage" className={styles.label}>
                  Risk Percentage per Trade
                  <FiInfo className={styles.infoIcon} title="Percentage of capital to risk per trade" />
                </label>
                <input
                  id="riskPercentage"
                  type="number"
                  min="0"
                  max="100"
                  className={styles.input}
                  placeholder="e.g. 2"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="maxTrades" className={styles.label}>
                  Maximum Concurrent Trades
                  <FiInfo className={styles.infoIcon} title="Maximum number of trades to open simultaneously" />
                </label>
                <input
                  id="maxTrades"
                  type="number"
                  min="1"
                  className={styles.input}
                  placeholder="e.g. 5"
                />
              </div>
            </div>
          )}
        </div>

        <div className={styles.formActions}>
          <button type="button" className={styles.secondaryButton}>
            Save as Draft
          </button>
          <button type="submit" className={styles.primaryButton}>
            Deploy Strategy
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStrategy;