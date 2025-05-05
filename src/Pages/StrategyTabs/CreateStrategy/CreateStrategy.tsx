import React from 'react';
import styles from './CreateStrategy.module.css';
import BasicConfiguration from './Sections/BasicConfiguration/BasicConfiguration';
import ReadymadeStrategies from './Sections/ReadymadeStrategies/ReadymadeStrategies';
import OrderLegs from './Sections/OrderLegs/OrderLegs';
import AdvancedFeatures from './Sections/AdvancedFeatures/AdvancedFeatures';
import RiskManagement from './Sections/RiskManagement/RiskManagement';
import ProfitTrailing from './Sections/ProfitTrailing/ProfitTrailing';
import StrategyPreview from './sections/StrategyPreview';

const CreateStrategy: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Trading Strategy</h2>
      
      <div className={styles.strategySections}>
        <BasicConfiguration />
        <ReadymadeStrategies />
        <OrderLegs />
        <AdvancedFeatures />
        <RiskManagement />
        <ProfitTrailing />
        <StrategyPreview />
        
        <div className={styles.actionButtons}>
          <button className={`${styles.button} ${styles.secondaryButton}`}>
            Save Draft
          </button>
          <button className={`${styles.button} ${styles.primaryButton}`}>
            Deploy Strategy
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStrategy;