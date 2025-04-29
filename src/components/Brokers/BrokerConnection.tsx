import React, { useState } from 'react';
import styles from './BrokerConnection.module.css';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

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
];

const BrokerConnection: React.FC = () => {
  const [activeBrokerId, setActiveBrokerId] = useState<string>(brokers.find((broker) => broker.connected)?.id || '');
  const userName = 'John Doe'; // Replace with dynamic user data if needed

  const handleBrokerClick = (brokerId: string) => {
    setActiveBrokerId(brokerId);
  };

  const activeBroker = brokers.find((broker) => broker.id === activeBrokerId);

  return (
      <div className={styles.panel}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Hello, {userName}</span>
          </div>
          <div className={styles.pnlInfo}>
            <span className={styles.pnlLabel}>Total P&L:</span>
            <span className={styles.pnlValue}>{activeBroker?.pnl || '₹0'}</span>
          </div>
        </div>

        {/* Broker Cards */}
        <div className={styles.brokersGrid}>
          {brokers.map((broker) => (
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
      </div>
  );
};

export default BrokerConnection;