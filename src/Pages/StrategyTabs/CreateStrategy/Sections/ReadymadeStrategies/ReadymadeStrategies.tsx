import React from 'react';
import styles from './ReadymadeStrategies.module.css';
import strategyTemplatesData from './templateData';

const strategyTemplates = [
  {
    id: 'goldenCross',
    name: 'Iron Condor',
    type: 'Trend Following',
    description: '50EMA crosses above 200EMA for long entry',
    complexity: 'Beginner'
  },
  {
    id: 'rsiOversold',
    name: 'RSI Oversold',
    type: 'Mean Reversion',
    description: 'Enter when RSI crosses below 30',
    complexity: 'Intermediate'
  },
  {
    id: 'breakoutTrading',
    name: 'Bull Call Spread',
    type: 'Breakout',
    description: 'Enter when price breaks resistance with volume',
    complexity: 'Advanced'
  },
  {
    id: 'macdCrossover',
    name: 'MACD Crossover',
    type: 'Momentum',
    description: 'MACD line crosses above signal line',
    complexity: 'Beginner'
  }
];
interface ReadymadeStrategiesProps {
  onTemplateSelect: (templateConfig: any) => void;
}

const ReadymadeStrategies: React.FC<ReadymadeStrategiesProps> = ({ onTemplateSelect }) => {
  
  const handleTemplateSelect = (templateId: string) => {
    // Get the corresponding configuration
    const config = strategyTemplatesData[templateId as keyof typeof strategyTemplatesData];
    onTemplateSelect(config);
  };
  
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
            <button 
              className={styles.useButton}
              onClick={() => handleTemplateSelect(template.id)}
              >
                Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadymadeStrategies;