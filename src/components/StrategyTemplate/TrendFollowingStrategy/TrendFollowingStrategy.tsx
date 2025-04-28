import styles from './TrendFollowingStrategy.module.css';

const TrendFollowingStrategy = () => {
  return (
    <div className={styles.strategyCard}>
      <div className={styles.header}>
        <h3 className={styles.title}>Trend Following</h3>
        <span className={styles.badge}>Popular</span>
      </div>
      <p className={styles.description}>
        Capitalize on sustained price movements with this momentum-based approach
      </p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>65%</span>
          <span className={styles.statLabel}>Win Rate</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statValue}>1.8</span>
          <span className={styles.statLabel}>Risk/Reward</span>
        </div>
      </div>
      <button className={styles.useStrategyButton}>
        Use This Strategy
      </button>
    </div>
  );
};

export default TrendFollowingStrategy;