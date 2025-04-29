import React from 'react';
import styles from './BrokerConnection.module.css';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

const brokers = [
  { 
    name: 'Zerodha', 
    connected: true, 
    logo: 'https://robo-matic.com/img/brokerlogo/broker_ZRLogo.png' 
  },
  { 
    name: 'Angel One', 
    connected: false, 
    logo: 'https://robo-matic.com//img/brokerlogo/angelLogo.jpeg'
  },
  { 
    name: 'Upstox', 
    connected: false, 
    logo: 'https://robo-matic.com/img/brokerlogo/upstox_logo.png' 
  },
];

const BrokerConnection: React.FC = () => {
  return (
    <div className={styles.brokerConnection}>
      <div className={styles.brokersGrid}>
        {brokers.map((broker) => (
          <div 
            key={broker.name}
            className={`${styles.brokerCard} ${broker.connected ? styles.connected : ''}`}
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
                    {broker.connected ? (
                      <FiCheckCircle className={styles.connectedIcon} />
                    ) : (
                      <FiAlertCircle className={styles.disconnectedIcon} />
                    )}
                    <span>{broker.connected ? 'Connected' : 'Disconnected'}</span>
                  </div>
                </div>
              </div>
              <button 
                className={styles.connectButton}
                aria-label={broker.connected ? 'Disconnect' : 'Connect'}
              >
                {broker.connected ? 'Disconnect' : 'Connect'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokerConnection;