import React from 'react';
import styles from './ReadymadeStrategies.module.css';

const strategyTemplates = [
  {
    name: 'Golden Cross',
    type: 'Trend Following',
    description: '50EMA crosses above 200EMA for long entry',
    complexity: 'Beginner'
  },
  {
    name: 'RSI Oversold',
    type: 'Mean Reversion',
    description: 'Enter when RSI crosses below 30',
    complexity: 'Intermediate'
  },
  {
    name: 'Breakout Trading',
    type: 'Breakout',
    description: 'Enter when price breaks resistance with volume',
    complexity: 'Advanced'
  },
  {
    name: 'MACD Crossover',
    type: 'Momentum',
    description: 'MACD line crosses above signal line',
    complexity: 'Beginner'
  }
];

const ReadymadeStrategies: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <span>📦</span> Readymade Strategies
      </h3>
      
      <div className={styles.templateGrid}>
        {strategyTemplates.map((template, index) => (
          <div key={index} className={styles.templateCard}>
            <div className={styles.templateHeader}>
              <h4 className={styles.templateName}>{template.name}</h4>
              <span className={`${styles.complexity} ${styles[template.complexity.toLowerCase()]}`}>
                {template.complexity}
              </span>
            </div>
            <p className={styles.templateType}>{template.type}</p>
            <p className={styles.templateDescription}>{template.description}</p>
            <button className={styles.useButton}>Use Template</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadymadeStrategies;