import React, { useRef, useState } from 'react';
import styles from './BrokerConnection.module.css';
import { FiCheckCircle, FiAlertCircle, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAuth } from '../Context/AuthContext';

const brokers = [
  { 
    id: 'ZR123', 
    name: 'Zerodha', 
    connected: true, 
    logo: 'https://robo-matic.com/img/brokerlogo/broker_ZRLogo.png',
    pnl: '+₹12,500', // Dynamic P&L for active broker
  },
  { 
    id: 'AN456', 
    name: 'Angel One', 
    connected: false, 
    logo: 'https://robo-matic.com//img/brokerlogo/angelLogo.jpeg',
    pnl: '+₹512,120', // Default P&L for inactive broker
  },
  { 
    id: 'UP789', 
    name: 'Upstox', 
    connected: false, 
    logo: 'https://robo-matic.com/img/brokerlogo/upstox_logo.png',
    pnl: '+₹53,920', // Default P&L for inactive broker
  },
  { 
    id: 'FY101', 
    name: 'Fyers', 
    connected: false, 
    logo: 'https://robo-matic.com/img/brokerlogo/fyers_logo.png',
    pnl: '+₹8,300', // Default P&L for inactive broker
  },
  { 
    id: 'AB404', 
    name: 'Alice Blue', 
    connected: false, 
    logo: 'https://robo-matic.com/img/brokerlogo/aliceblue-logo.png',
    pnl: '+₹10,200', // Default P&L for inactive broker
  },
  { 
    id: 'BS505', 
    name: 'Basan', 
    connected: false, 
    logo: 'https://robo-matic.com/img/brokerlogo/basan_logo.png',
    pnl: '+₹7,800', // Default P&L for inactive broker
  },
];

const BrokerConnection: React.FC = () => {
  const [activeBrokerId, setActiveBrokerId] = useState<string>(brokers.find((broker) => broker.connected)?.id || '');
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const brokersContainerRef = useRef<HTMLDivElement>(null);
  const {user} = useAuth();

  const handleBrokerClick = (brokerId: string) => {
    setActiveBrokerId(brokerId);
  };

  const scrollBrokers = (direction: 'left' | 'right') => {
    if (direction === 'left' && visibleStartIndex > 0) {
      setVisibleStartIndex(prev => prev - 1);
    } else if (direction === 'right' && visibleStartIndex < brokers.length - 3) {
      setVisibleStartIndex(prev => prev + 1);
    }
  };

  const activeBroker = brokers.find((broker) => broker.id === activeBrokerId);
  const visibleBrokers = brokers.slice(visibleStartIndex, visibleStartIndex + 3);
  const showLeftButton = visibleStartIndex > 0;
  const showRightButton = visibleStartIndex < brokers.length - 3;

  return (
    <div className={styles.panel}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Morning, {user?.name || 'Guest'}</span>
        </div>
        <div className={styles.pnlInfo}>
          <span className={styles.pnlLabel}>Total P&L:</span>
          <span className={styles.pnlValue}>{activeBroker?.pnl || '₹0'}</span>
        </div>
      </div>

      <div className={styles.brokersWrapper}>

        {/* Broker Cards with Scroll Controls */}
        <div className={styles.brokersContainer}>
          {showLeftButton && (
            <button 
              className={styles.scrollLeft}
              onClick={() => scrollBrokers('left')}
              aria-label="Scroll left"
            >
              <FiChevronLeft size={24} />
            </button>
          )}
          
          <div className={styles.brokersGrid} ref={brokersContainerRef}>
            {visibleBrokers.map((broker) => (
              <div 
                key={broker.id}
                className={`${styles.brokerCard} ${activeBrokerId === broker.id ? styles.active : styles.inactive}`}
                onClick={() => handleBrokerClick(broker.id)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.brokerHeader}>
                    <img 
                      src={broker.logo} 
                      alt={`${broker.name} logo`}
                      className={styles.brokerLogo}
                    />
                    <div className={styles.brokerNameStatus}>
                      <span className={styles.brokerName}>{broker.name}</span>
                      <div className={styles.connectionStatus}>
                        {activeBrokerId === broker.id ? (
                          <FiCheckCircle className={styles.connectedIcon} />
                        ) : (
                          <FiAlertCircle className={styles.disconnectedIcon} />
                        )}
                        <span>{activeBrokerId === broker.id ? 'Active' : 'Inactive'}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.brokerId}>
                    <span>ID: {broker.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showRightButton && (
            <button 
              className={styles.scrollRight}
              onClick={() => scrollBrokers('right')}
              aria-label="Scroll right"
            >
              <FiChevronRight size={24} />
            </button>
          )}

        </div>
        
        {/* Dot Indicators - Positioned beneath cards */}
        <div className={styles.dotsContainer}>
          {Array.from({ length: Math.ceil(brokers.length / 2) }).map((_, index) => (
            <div 
              key={index}
              className={`${styles.dot} ${
                index === Math.floor(visibleStartIndex / 2) ? styles.activeDot : ''
              }`}
              onClick={() => setVisibleStartIndex(index * 2)}
            />
          ))}
        </div>
      </div>
      {/* Action Buttons */}
      <div className={styles.actionButtons}>
        <button className={styles.actionButton}>
          Connect Broker
        </button>
        <button className={styles.actionButton}>
          Execute Trade
        </button>
      </div>
    </div>
  );
};

export default BrokerConnection;