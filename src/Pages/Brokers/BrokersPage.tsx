import React from "react";
import styles from "./BrokersPage.module.css";

const availableBrokers = [
  { name: "Zerodha", description: "India's largest stock broker" },
  { name: "Upstox", description: "Discount broker with powerful API" },
  { name: "Angel One", description: "Full-service broker with API access" },
  { name: "ICICI Direct", description: "Bank-based trading platform" },
];

const connectedBrokers = [
  {
    name: "Zerodha",
    connectedOn: "Jun 15, 2023",
    status: "Active",
    margin: "₹1,25,000",
    balance: "₹2,50,000",
    clientId: "ZD1234",
  },
  {
    name: "Angel One",
    connectedOn: "Jun 10, 2023",
    status: "Inactive",
    note: "Account needs to be activated to access trading features",
  },
];

const BrokersPage: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2>Broker Integrations</h2>
        <p>
          Connect your trading accounts for automated execution
        </p>
        <div className={styles.securityBox}>
          <h4>Secure Connection</h4>
          <p>
            All broker connections use official APIs with OAuth authentication.
            Your credentials are encrypted and never stored on our servers.
          </p>
        </div>
      </div>

      {/* Available Brokers */}
      <section className={styles.section}>
        <h3>Available Brokers</h3>
        <p>Select from our supported brokers to connect your account</p>
        <div className={styles.brokerGrid}>
          {availableBrokers.map((broker, idx) => (
            <div key={idx} className={styles.brokerCard}>
              <h4>{broker.name}</h4>
              <p>{broker.description}</p>
              <button className={styles.addBtn}>Add Broker</button>
            </div>
          ))}
        </div>
        <div className={styles.requestBox}>
          <p>
            Don't see your broker? We're constantly adding new broker
            integrations. Request support for your preferred broker.
          </p>
          <button className={styles.requestBtn}>Request Broker</button>
        </div>
      </section>

      {/* Connected Brokers */}
      <section className={styles.section}>
        <h3>Connected Brokers</h3>
        <p>Manage your connected trading accounts</p>
        <div className={styles.connectedList}>
          {connectedBrokers.map((broker, idx) => (
            <div key={idx} className={styles.connectedCard}>
              <div className={styles.connectedHeader}>
                <h4>{broker.name}</h4>
                <span>Connected on {broker.connectedOn}</span>
              </div>

              {broker.status === "Active" ? (
                <div className={styles.activeContent}>
                  <p>
                    <strong>Status:</strong> {broker.status}
                  </p>
                  <p>
                    <strong>Available Margin:</strong> {broker.margin}
                  </p>
                  <p>
                    <strong>Account Balance:</strong> {broker.balance}
                  </p>
                  <p>
                    <strong>Client ID:</strong> {broker.clientId}
                  </p>
                </div>
              ) : (
                <div className={styles.inactiveContent}>
                  <p>
                    <strong>Status:</strong> {broker.status}
                  </p>
                  <p>{broker.note}</p>
                  <button className={styles.activateBtn}>Activate Now</button>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className={styles.footerNote}>
          Add more brokers to diversify your trading
        </p>
        <button className={styles.connectBtn}>Connect Another Broker</button>
      </section>
    </div>
  );
};

export default BrokersPage;