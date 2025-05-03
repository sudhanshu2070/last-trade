import React, { useState } from 'react';
import styles from './StrategyPage.module.css';
import CreateStrategy from '../../components/TestComp';
import MyStrategies from '../../components/TestComp';
import DeployedStrategies from '../../components/TestComp';
import StrategyTemplates from '../../components/TestComp';

const StrategyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('create');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'create':
        return <CreateStrategy />;
      case 'my':
        return <MyStrategies />;
      case 'deployed':
        return <DeployedStrategies />;
      case 'templates':
        return <StrategyTemplates />;
      default:
        return <CreateStrategy />;
    }
  };

  return (
    <div className={styles.strategyPage}>
      <div className={styles.header}>
        <h1>Strategy Management</h1>
      </div>
      
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => setActiveTab('create')}
        >
          Create Strategy
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'my' ? styles.active : ''}`}
          onClick={() => setActiveTab('my')}
        >
          My Strategies
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'deployed' ? styles.active : ''}`}
          onClick={() => setActiveTab('deployed')}
        >
          Deployed Strategies
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'templates' ? styles.active : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          Templates
        </button>
      </div>

      <div className={styles.tabContent}>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default StrategyPage;