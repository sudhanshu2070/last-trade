import React, { useState } from 'react';
import styles from './CreateStrategy.module.css';
import BasicConfiguration from './Sections/BasicConfiguration/BasicConfiguration';
import ReadymadeStrategies from './Sections/ReadymadeStrategies/ReadymadeStrategies';
import OrderLegs from './Sections/OrderLegs/OrderLegs';
import AdvancedFeatures from './Sections/AdvancedFeatures/AdvancedFeatures';
import RiskManagement from './Sections/RiskManagement/RiskManagement';
import ProfitTrailing from './Sections/ProfitTrailing/ProfitTrailing';
import StrategyPreview from './Sections/StrategyPerformancePreview/StrategyPerformancePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPrint } from '@fortawesome/free-solid-svg-icons';
import ChartSettings from './Sections/ChartSettings/ChartSettings';
import EntryConditions from './Sections/EntryConditions/EntryConditions';

const CreateStrategy: React.FC = () => {
  const [strategyName, setStrategyName] = useState<string>('ORB with Trailing SL');
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Strategy</h2>
      
      <div className={styles.strategySections}>
        <BasicConfiguration />
        <ChartSettings />
        <EntryConditions />
        <ReadymadeStrategies />
        <OrderLegs showAdvancedFeatures={showAdvancedFeatures} />
        <AdvancedFeatures 
          onSave={() => setShowAdvancedFeatures(true)} 
        />
        <RiskManagement />
        <ProfitTrailing />
        
        <div className={styles.strategyControls}>
            <div className={styles.strategyNameGroup}>
              <label className={styles.strategyLabel}>Strategy Name</label>
              <input
                type="text"
                value={strategyName}
                onChange={(e) => setStrategyName(e.target.value)}
                className={styles.strategyInput}
                placeholder="Enter strategy name"
              />
            </div>
        
            <div className={styles.actionButtons}>
              <button className={`${styles.button} ${styles.saveButton}`}>
                <FontAwesomeIcon icon={faFloppyDisk} />
                Save & Create
              </button>
              <button className={styles.printButton}>
                <FontAwesomeIcon icon={faPrint} />
              </button>
            </div>
          </div>
        <StrategyPreview />
      </div>
    </div>
  );
};

export default CreateStrategy;