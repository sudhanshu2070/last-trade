import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './StrategyPage.module.css';
import CreateStrategy from '../../Pages/StrategyTabs/CreateStrategy/CreateStrategy';
import TestComponet from '../../components/TestComp';
import MyStrategies from '../StrategyTabs/MyStrategies/MyStrategies';

const StrategyPage: React.FC = () => {
  const { tab } = useParams(); // Getting the tab parameter from URL
  const navigate = useNavigate();

    // Set initial activeTab based on URL parameter or default to 'create'
  const [activeTab, setActiveTab] = useState(tab || 'create');

  // Update both state and URL when tab changes
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    navigate(`/strategies/${newTab}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'create':
        return <CreateStrategy />;
      case 'myStrategies':
        return <MyStrategies />;
      case 'deployed':
        return <TestComponet name={'Deployed Strategies'} />;
      case 'templates':
        return <TestComponet name={'All template'} />;
      default:
        return <CreateStrategy />;
    }
  };

  return (
    <div className={styles.strategyPage}>
      
      <div className={styles.tabContainer}>
        <button
          className={`${styles.tabButton} ${activeTab === 'create' ? styles.active : ''}`}
          onClick={() => handleTabChange('create')}
        >
          Create Strategy
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'myStrategies' ? styles.active : ''}`}
          onClick={() => handleTabChange('myStrategies')}
        >
          My Strategies
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'deployed' ? styles.active : ''}`}
          onClick={() => handleTabChange('deployed')}
        >
          Deployed Strategies
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'templates' ? styles.active : ''}`}
          onClick={() => handleTabChange('templates')}
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