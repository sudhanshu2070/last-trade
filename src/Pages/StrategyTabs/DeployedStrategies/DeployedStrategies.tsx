import React, { useState } from "react";
import styles from "./DeployedStrategies.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Strategy {
  name: string;
  instrument: string;
  mode: string;
  status: string;
  pnl: string;
  trades: number;
}

interface Broker {
  id: string;
  name: string;
  activeStrategies: number;
  maxProfit: string;
  maxLoss: string;
  strategies: Strategy[];
}

const brokers: Broker[] = [
  {
    id: "zerodha",
    name: "Zerodha",
    activeStrategies: 6,
    maxProfit: "₹10,000",
    maxLoss: "₹5,000",
    strategies: [
      {
        name: "NIFTY Momentum",
        instrument: "NIFTY",
        mode: "Live",
        status: "Running",
        pnl: "+₹2,450.75",
        trades: 3,
      },
      {
        name: "BANKNIFTY Reversal",
        instrument: "BANKNIFTY",
        mode: "Paper",
        status: "Paused",
        pnl: "-₹850.50",
        trades: 1,
      },
      {
        name: "Intraday Scalper",
        instrument: "NIFTY",
        mode: "Live",
        status: "Running",
        pnl: "+₹3,280.00",
        trades: 5,
      },
      {
        name: "Options Strategy",
        instrument: "BANKNIFTY",
        mode: "Live",
        status: "Running",
        pnl: "+₹1,120.25",
        trades: 2,
      },
    ],
  },
  {
    id: "upstox",
    name: "Upstox",
    activeStrategies: 4,
    maxProfit: "₹8,000",
    maxLoss: "₹4,000",
    strategies: [],
  },
];

const DeployedStrategies: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className={styles.container}>
      {/* Top Row Summary */}
      <div className={styles.summaryRow}>
        <div className={styles.summaryCard}>
          <p>Total Active Strategies</p>
          <h2>8</h2>
          <span className={styles.trend}>+3 from last week</span>
        </div>
        <div className={styles.summaryCard}>
          <p>Overall P&amp;L</p>
          <h2>₹20,200</h2>
          <span className={styles.trendPositive}>+12.4% this month</span>
        </div>
        <div className={styles.summaryCard}>
          <p>Running Strategies</p>
          <h2>5 / 8</h2>
          <span className={styles.trend}>4 strategies paused</span>
        </div>
      </div>

      {/* Filters Row */}
      <div className={styles.filters}>
        <select>
          <option>All Brokers</option>
        </select>
        <select>
          <option>Status</option>
        </select>
        <select>
          <option>Mode</option>
        </select>
        <input type="text" placeholder="Search strategies..." />
      </div>

      {/* Brokers List */}
      <div className={styles.brokerList}>
        {brokers.map((broker) => (
          <div key={broker.id} className={styles.brokerCard}>
            <div
              className={styles.brokerHeader}
              onClick={() => toggleExpand(broker.id)}
            >
              <div>
                <h3>{broker.name}</h3>
                <p>{broker.activeStrategies} active strategies</p>
              </div>
              <div className={styles.brokerStats}>
                <span>Max Profit: {broker.maxProfit}</span>
                <span>Max Loss: {broker.maxLoss}</span>
                <button className={styles.startBtn}>Start All</button>
                <button className={styles.stopBtn}>Stop All</button>
                {expanded === broker.id ? <ChevronUp /> : <ChevronDown />}
              </div>
            </div>

            {/* Expanded Strategies Table */}
            {expanded === broker.id && broker.strategies.length > 0 && (
              <div className={styles.expandedContent}>
                <div className={styles.expandedStats}>
                  <span>Open: 4</span>
                  <span>Pending: 1</span>
                  <span>Archived: 2</span>
                </div>
                <table className={styles.strategyTable}>
                  <thead>
                    <tr>
                      <th>Strategy Name</th>
                      <th>Instrument</th>
                      <th>Mode</th>
                      <th>Status</th>
                      <th>P&amp;L</th>
                      <th>Today's Trades</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {broker.strategies.map((s, idx) => (
                      <tr key={idx}>
                        <td>{s.name}</td>
                        <td>{s.instrument}</td>
                        <td>{s.mode}</td>
                        <td>{s.status}</td>
                        <td>{s.pnl}</td>
                        <td>{s.trades}</td>
                        <td>
                          <button className={styles.squareOffBtn}>
                            Square Off
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeployedStrategies;