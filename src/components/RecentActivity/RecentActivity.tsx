import React from 'react';
import styles from './RecentActivity.module.css';
import { FiCheckCircle, FiXCircle, FiClock } from 'react-icons/fi';

const activities = [
  { id: 1, strategy: 'Nifty 50 Momentum', status: 'completed', time: '10:45 AM', pnl: '+1,250.00' },
  { id: 2, strategy: 'Bank Nifty Mean Reversion', status: 'failed', time: '11:30 AM', pnl: '-850.50' },
  { id: 3, strategy: 'IT Sector Breakout', status: 'pending', time: '12:15 PM', pnl: '0.00' },
  { id: 4, strategy: 'FMCG Trend Following', status: 'completed', time: '1:45 PM', pnl: '+2,100.75' },
];

const RecentActivity: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <FiCheckCircle className={styles.successIcon} />;
      case 'failed': return <FiXCircle className={styles.errorIcon} />;
      case 'pending': return <FiClock className={styles.warningIcon} />;
      default: return null;
    }
  };

  return (
    <div className={styles.activityContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Recent Strategy Activity</h3>
      </div>
      
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Strategy</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Time</div>
          <div className={`${styles.headerCell} ${styles.rightAlign}`}>PNL</div>
        </div>
        
        <div className={styles.tableBody}>
          {activities.map((activity) => (
            <div key={activity.id} className={styles.tableRow}>
              <div className={styles.tableCell}>{activity.strategy}</div>
              <div className={styles.tableCell}>
                <span className={`${styles.status} ${styles[activity.status]}`}>
                  {getStatusIcon(activity.status)}
                  {activity.status}
                </span>
              </div>
              <div className={styles.tableCell}>{activity.time}</div>
              <div className={`${styles.tableCell} ${styles.rightAlign} ${
                activity.pnl.startsWith('+') ? styles.profit : 
                activity.pnl.startsWith('-') ? styles.loss : ''
              }`}>
                {activity.pnl}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;