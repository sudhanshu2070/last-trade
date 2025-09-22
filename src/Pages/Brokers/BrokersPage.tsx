import React from "react";
import styles from "./BrokersPage.module.css";
import { FaLock, FaTrashAlt, FaUserTie, FaUniversity, FaBuilding, FaChartLine } from "react-icons/fa";

const BrokersPage: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Broker Integrations</h1>
        <p className={styles.subtitle}>
          Connect your trading accounts for automated execution
        </p>

        <div className={styles.secureBox}>
          <FaLock className={styles.lockIcon} />
          <div>
            <h2 className={styles.secureTitle}>Secure Connection</h2>
            <p className={styles.secureText}>
              All broker connections use official APIs with OAuth authentication.
              Your credentials are encrypted and never stored on our servers.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.container}>
        {/* Available Brokers */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Available Brokers</h2>
          <p className={styles.description}>
            Select from our supported brokers to connect your account
          </p>

          <div className={styles.brokerList}>
            <div className={styles.brokerItem}>
              <div className={styles.brokerInfo}>
                <FaChartLine className={styles.brokerIcon} />
                <div>
                  <h3>Zerodha</h3>
                  <p>India's largest stock broker</p>
                </div>
              </div>
              <button className={styles.addButton}>Add Broker</button>
            </div>

            <div className={styles.brokerItem}>
              <div className={styles.brokerInfo}>
                <FaUserTie className={styles.brokerIcon} />
                <div>
                  <h3>Upstox</h3>
                  <p>Discount broker with powerful API</p>
                </div>
              </div>
              <button className={styles.addButton}>Add Broker</button>
            </div>

            <div className={styles.brokerItem}>
              <div className={styles.brokerInfo}>
                <FaBuilding className={styles.brokerIcon} />
                <div>
                  <h3>Angel One</h3>
                  <p>Full-service broker with API access</p>
                </div>
              </div>
              <button className={styles.addButton}>Add Broker</button>
            </div>

            <div className={styles.brokerItem}>
              <div className={styles.brokerInfo}>
                <FaUniversity className={styles.brokerIcon} />
                <div>
                  <h3>ICICI Direct</h3>
                  <p>Bank-based trading platform</p>
                </div>
              </div>
              <button className={styles.addButton}>Add Broker</button>
            </div>
          </div>

          <div className={styles.requestSection}>
            <h4>Don't see your broker?</h4>
            <p>
              We're constantly adding new broker integrations. Request support
              for your preferred broker.
            </p>
            <button className={styles.requestButton}>Request Broker</button>
          </div>
        </div>

        {/* Connected Brokers */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Connected Brokers</h2>
          <p className={styles.description}>
            Manage your connected trading accounts
          </p>

          <div className={styles.connectedItem}>
            <div className={styles.connectedHeader}>
              <div className={styles.connectedInfo}>
                <FaChartLine className={styles.brokerIcon} />
                <h3>Zerodha</h3>
              </div>
              <span className={styles.active}>Active</span>
              <FaTrashAlt className={styles.deleteIcon} />
            </div>
            <p>Connected on Jun 15, 2023</p>
            <p>Available Margin: ₹1,25,000</p>
            <p>Account Balance: ₹2,50,000</p>
            <p>Client ID: ZD1234</p>
          </div>

          <div className={styles.connectedItem}>
            <div className={styles.connectedHeader}>
              <div className={styles.connectedInfo}>
                <FaBuilding className={styles.brokerIcon} />
                <h3>Angel One</h3>
              </div>
              <span className={styles.inactive}>Inactive</span>
              <FaTrashAlt className={styles.deleteIcon} />
            </div>
            <p>Connected on Jun 10, 2023</p>
            <p>Account needs to be activated to access trading features</p>
            <button className={styles.activateButton}>Activate Now</button>
          </div>

          <div className={styles.connectAnother}>
            <p>Add more brokers to diversify your trading</p>
            <button className={styles.addButton}>Connect Another Broker</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokersPage;