import styles from './MeanReversionStrategy.module.css';

const MeanReversionStrategy = () => {
  return (
    <div className={styles.strategyCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>Mean Reversion</h3>
        <span className={styles.badge}>Conservative</span>
      </div>
      <p className={styles.description}>
        Profit from price corrections back to historical averages
      </p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>72%</span>
          <span className={styles.statLabel}>Win Rate</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>1.2</span>
          <span className={styles.statLabel}>Risk/Reward</span>
        </div>
      </div>
      <div className={styles.timeframe}>
        <span className={styles.timeframeLabel}>Best Timeframe:</span>
        <span className={styles.timeframeValue}>15min - 1H</span>
      </div>
      <button className={styles.useStrategyButton}>
        Use This Strategy
      </button>
    </div>
  );
};

export default MeanReversionStrategy;