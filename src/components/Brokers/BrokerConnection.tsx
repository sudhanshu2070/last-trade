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
      <h2 className={styles.sectionTitle}>Connected Brokers</h2>
      <div className={styles.brokersGrid}>
        {brokers.map((broker) => (
          <div 
            key={broker.name}
            className={`${styles.brokerCard} ${broker.connected ? styles.connected : ''}`}
          >
            <div className={styles.brokerLogo}>
              <img 
                src={broker.logo} 
                alt={`${broker.name} logo`} 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/brokers/default-broker.png';
                }}
              />
            </div>
            <div className={styles.brokerInfo}>
              <h3>{broker.name}</h3>
              <div className={styles.connectionStatus}>
                {broker.connected ? (
                  <>
                    <FiCheckCircle className={styles.connectedIcon} />
                    <span>Connected</span>
                  </>
                ) : (
                  <>
                    <FiAlertCircle className={styles.disconnectedIcon} />
                    <span>Disconnected</span>
                  </>
                )}
              </div>
            </div>
            <button 
              className={styles.connectButton}
              aria-label={broker.connected ? 'Disconnect' : 'Connect'}
            >
              {broker.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokerConnection;