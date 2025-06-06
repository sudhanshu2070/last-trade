import React from 'react';
import styles from './MyStrategies.module.css'; 
import { FaPlay, FaPlus, FaSearch } from 'react-icons/fa';
import { FaClock, FaChartLine, FaCogs, FaBolt } from 'react-icons/fa';

const strategies = [
  {
    id: 1,
    title: 'Nifty Gap & Go Strategy',
    description: 'Time-based • Nifty • Updated 05 May 2025',
    icon: <FaClock />, // Time-based
  },
  {
    id: 2,
    title: 'BankNifty Reversal Setup',
    description: 'Indicator-based • BankNifty • Updated 20 Apr 2025',
    icon: <FaChartLine />, // Indicator-based
  },
  {
    id: 3,
    title: 'Weekly Straddle Strategy',
    description: 'Options-based • Nifty • Updated 12 Mar 2025',
    icon: <FaCogs />, // Options-based
  },
  {
    id: 4,
    title: 'Momentum Intraday Strategy',
    description: 'Time-based • FINNIFTY • Updated 30 May 2025',
    icon: <FaBolt />, // Time-based with speed emphasis
  }
];

const MyStrategies: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>My Strategies</h2>
        <button className={styles.createButton}>
          <FaPlus /> Create Strategy
        </button>
      </div>

      {/* Search Box */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search strategies..."
          className={styles.searchInput}
        />
      </div>

      {/* Strategy List */}
      <div className={styles.strategyList}>
        {strategies.map((strategy) => (
          <div key={strategy.id} className={styles.strategyCard}>
            <div className={styles.strategyInfo}>
                <div className={styles.iconWrapper}>{strategy.icon}</div>
                    <div>
                        <h3 className={styles.strategyTitle}>{strategy.title}</h3>
                        <p className={styles.strategyDescription}>{strategy.description}</p>
                    </div>
                </div>
                <div className={styles.strategyActions}>
                    <button className={styles.backtestButton}><FaPlay /> Backtest</button>
                    <button className={styles.deployButton}>Deploy</button>
                </div>    
            </div>
            ))}
        </div>
    </div>
  );
};

export default MyStrategies;