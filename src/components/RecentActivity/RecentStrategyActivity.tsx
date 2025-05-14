import React, { useState } from 'react';
import styles from './RecentStrategyActivity.module.css';
import { FiCheckCircle, FiXCircle, FiClock, FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai'; // Delete icon
import { IoClose } from 'react-icons/io5'; // X icon
import { useNavigate } from 'react-router-dom';
// import { HiOutlineMenuAlt3 } from 'react-icons/hi'; // Three horizontal lines icon

const activities = [
  { id: 1, strategy: 'Nifty 50 Momentum', status: 'completed', tradeType: 'Paper trade', pnl: '+1,250.00', details: {
    entry: '18,250',
    exit: '18,450',
    quantity: 50,
    brokerage: '₹20.00',
    duration: '2 hours 15 mins'
  } },
  { id: 2, strategy: 'Bank Nifty Mean Reversion', status: 'failed', tradeType: 'Live trade', pnl: '-850.50', details: {
    entry: '42,000',
    exit: '41,800',
    quantity: 30,
    brokerage: '₹15.00',
    duration: '1 hour 45 mins'
  } },
  { id: 3, strategy: 'IT Sector Breakout', status: 'pending', tradeType: 'Paper trade', pnl: '0.00', details: {
    entry: '28,500',
    exit: '-',
    quantity: 20,
    brokerage: '₹10.00',
    duration: '-'
  } },
  { id: 4, strategy: 'FMCG Trend Following', status: 'completed', tradeType: 'Live trade', pnl: '+2,100.75', details: {
    entry: '35,600',
    exit: '37,700',
    quantity: 40,
    brokerage: '₹25.00',
    duration: '3 hours 30 mins'
  } },
];

const RecentStrategyActivity: React.FC = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState<number | null>(null);



  const toggleDetails = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
        <button 
          className={styles.viewMoreButton}
          onClick={() => navigate('/strategies')}
        >
          View More
        </button>
      </div>
      
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>Strategy</div>
          <div className={styles.headerCell}>Status</div>
          <div className={styles.headerCell}>Deployment Type</div>
          <div className={`${styles.headerCell} ${styles.rightAlign}`}>PNL</div>
        </div>
        
        <div className={styles.tableBody}>
          {activities.map((activity) => (
            <React.Fragment key={activity.id}>
              <div className={styles.tableRow}>
                <div className={styles.tableRowContent}>
                  <div className={styles.tableCell}>{activity.strategy}</div>
                  <div className={styles.tableCell}>
                    <span className={`${styles.status} ${styles[activity.status]}`}>
                      {getStatusIcon(activity.status)}
                      {activity.status}
                    </span>
                  </div>
                  <div className={styles.tableCell}>{activity.tradeType}</div>
                  <div className={`${styles.tableCell}} ${
                    activity.pnl.startsWith('+') ? styles.profit : 
                    activity.pnl.startsWith('-') ? styles.loss : ''
                  }`}>
                    {activity.pnl}
                  </div>
                </div>

                {/* Hover Buttons */}
                <div className={styles.hoverButtons}>
                  <button 
                    className={styles.hoverButton}
                    data-tooltip="Square off"
                  >
                    <IoClose />
                  </button>

                  <button 
                    className={styles.hoverButton}
                    data-tooltip="Details"
                    onClick={() => toggleDetails(activity.id)}
                  >
                    {/* <HiOutlineMenuAlt3 /> Three Horizontal Lines */}

                    {expandedId === activity.id ? <FiChevronUp /> : <FiChevronDown />}
                  </button>

                  <button 
                    className={styles.hoverButton}
                    data-tooltip="Remove deployment"
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>

              {/* Expanded Details Section */}
              {expandedId === activity.id && (
                <div className={styles.detailsContainer}>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Entry Price:</span>
                      <span>{activity.details.entry}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Exit Price:</span>
                      <span>{activity.details.exit}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Quantity:</span>
                      <span>{activity.details.quantity}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Brokerage:</span>
                      <span>{activity.details.brokerage}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Duration:</span>
                      <span>{activity.details.duration}</span>
                    </div>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentStrategyActivity;