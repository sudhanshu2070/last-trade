import React, { useEffect, useState } from 'react';
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
import ExitConditions from './Sections/ExitConditions/ExitConditions';
import PositionBuilder from './Sections/PositionBuilder/PositionBuilder';

const CreateStrategy: React.FC = () => {
  const [strategyName, setStrategyName] = useState<string>('ORB with Trailing SL');
  const [showAdvancedFeatures, setShowAdvancedFeatures] = useState(false);
  const [strategyType, setStrategyType] = useState<string>('time-based'); 
  const [transactionType, setTransactionType] = useState<string>('bothLongAndShort'); 
  const [templateConfig, setTemplateConfig] = useState<any>(null);
  const [templateConfigOrderLegData, setTemplateConfigOrderLegData] = useState<any>(templateConfig?.orderLegs);
  
  const handleTemplateSelect = (config: any) => {
    setTemplateConfig(config);
    setStrategyType(config.strategyType);
    setTransactionType(config.transactionType);
    setTemplateConfigOrderLegData(config.orderLegs);
  };

  // Resetting to 'bothLongAndShort'(initial value) when strategy becomes "indicator-based"
  useEffect(() => {
    if (strategyType === 'indicator') {
      setTransactionType('bothLongAndShort');
      setTemplateConfigOrderLegData({}); // Reset order legs data
    }
  }, [strategyType]);

  const showLong = transactionType === 'bothLongAndShort' || transactionType === 'long';
  const showShort = transactionType === 'bothLongAndShort' || transactionType === 'short';

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create New Strategy</h2>
      
      <div className={styles.strategySections}>
        <BasicConfiguration 
          onChange={setStrategyType}
          initialValues={templateConfig?.basicConfig}/>

        {/* hide/show in the case of change in Strategy Type */}
        {strategyType === 'indicator' && (
         <>
            <ChartSettings 
              onChange={setTransactionType}
              initialValues={templateConfig?.chartSettings}
            />
            <EntryConditions 
              showLong={showLong}
              showShort={showShort}
              initialValues={templateConfig?.entryConditions}
            />
            <ExitConditions 
              showLong={showLong}
              showShort={showShort} 
              initialValues={templateConfig?.exitConditions}
            />
            <PositionBuilder
              showLong={showLong}
              showShort={showShort}
              initialValues={templateConfig?.positionBuilder}
            />
          </>
        )}

        {strategyType === 'time-based' && (
          <>
            <ReadymadeStrategies onTemplateSelect={handleTemplateSelect} />
            <OrderLegs showAdvancedFeatures={showAdvancedFeatures} initialValues={templateConfigOrderLegData}/>
            <AdvancedFeatures 
              onSave={() => setShowAdvancedFeatures(true)} 
            />
          </>
        )}
        
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