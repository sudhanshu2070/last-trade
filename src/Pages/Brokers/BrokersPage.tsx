import React, { useState } from "react";
import styles from "./BrokersPage.module.css";
import { FaLock, FaTrashAlt, FaUniversity } from "react-icons/fa";

const BrokersPage: React.FC = () => {
  const [selectedBroker, setSelectedBroker] = useState<string | null>(null);

  const openModal = (brokerName: string) => {
    setSelectedBroker(brokerName);
  };

  const closeModal = () => {
    setSelectedBroker(null);
  };

  return (
    <div className={styles.page}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Broker Integrations</h1>
        <p className={styles.subtitle}>
          Connect your trading accounts for automated execution
        </p>

        <div className={styles.secureBox}>
          <div className={styles.iconCircle}>
            <FaLock className={styles.lockIcon} />
          </div>
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
            {[
              { name: "Zerodha", desc: "India's largest stock broker" },
              { name: "Upstox", desc: "Discount broker with powerful API" },
              { name: "Angel One", desc: "Full-service broker with API access" },
              { name: "ICICI Direct", desc: "Bank-based trading platform" },
            ].map((broker, index) => (
              <div key={index} className={styles.brokerItem}>
                <div className={styles.brokerInfo}>
                  <div className={styles.iconCircle}>
                    <FaUniversity className={styles.brokerIcon} />
                  </div>
                  <div>
                    <h3>{broker.name}</h3>
                    <p>{broker.desc}</p>
                  </div>
                </div>
                <button
                  className={styles.addButton}
                  onClick={() => openModal(broker.name)}
                >
                  Add Broker
                </button>
              </div>
            ))}
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

          {/* Active Broker */}
          <div className={styles.connectedItem}>
            <div className={styles.connectedHeader}>
              <div className={styles.connectedInfo}>
                <div className={styles.iconCircle}>
                  <FaUniversity className={styles.brokerIcon} />
                </div>
                <div className={styles.brokerText}>
                  <h3>Zerodha</h3>
                  <p className={styles.connectedDate}>Connected on Jun 15, 2023</p>
                </div>
              </div>
              <div className={styles.rightActions}>
                <span className={`${styles.status} ${styles.active}`}>Active</span>
                <FaTrashAlt className={styles.deleteIcon} />
              </div>
            </div>
            <div className={styles.infoGrid}>
              <div>
                <p className={styles.label}>Available Margin</p>
                <p>₹1,25,000</p>
              </div>
              <div>
                <p className={styles.label}>Account Balance</p>
                <p>₹2,50,000</p>
              </div>
              <div>
                <p className={styles.label}>Client ID</p>
                <p>ZD1234</p>
              </div>
              <div>
                <p className={styles.label}>Status</p>
                <p>Connected</p>
              </div>
            </div>
          </div>

          {/* Inactive Broker */}
          <div className={`${styles.connectedItem}`}>
            <div className={styles.connectedHeader}>
              <div className={styles.connectedInfo}>
                <div className={styles.iconCircle}>
                  <FaUniversity className={styles.brokerIcon} />
                </div>
                <div className={styles.brokerText}>
                  <h3>Angel One</h3>
                  <p className={styles.connectedDate}>Connected on Jun 10, 2023</p>
                </div>
              </div>
              <div className={styles.rightActions}>
                <span className={`${styles.status} ${styles.inactive}`}>Inactive</span>
                <FaTrashAlt className={styles.deleteIcon} />
              </div>
            </div>

            <div className={`${styles.sectionBlock} ${styles.centerAlign}`}>
              <p>Account needs to be activated to access trading features</p>
              <button className={styles.activateButton}>Activate Now</button>
            </div>

            <div className={styles.divider}></div>

            <div className={`${styles.sectionBlock} ${styles.connectAnother}`}>
              <p>Add more brokers to diversify your trading</p>
              <button className={styles.addButton} onClick={() => openModal("Angel One")}>
                Connect Another Broker
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Broker Modal */}
      {selectedBroker && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Connect {selectedBroker}</h2>
            <p>Enter your API credentials to connect your {selectedBroker} account</p>

            <form className={styles.modalForm}>
              <label>Client ID</label>
              <input type="text" placeholder="ZD1234" />
              <label>API Key</label>
              <input type="text" placeholder="Enter API Key" />
              <label>API Secret</label>
              <input type="password" placeholder="Enter API Secret" />

              <div className={styles.terms}>
                <input type="checkbox" id="authorize" />
                <label htmlFor="authorize">
                  I authorize TradePro to execute trades on my behalf using the {selectedBroker} API
                </label>
              </div>

              <button type="submit" className={styles.connectButton}>
                Connect Account
              </button>
            </form>

            <p className={styles.helpText}>
              Need help? <a href="#">View our setup guide</a> for connecting {selectedBroker} accounts.
            </p>

            <button className={styles.closeButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrokersPage;