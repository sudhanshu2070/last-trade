import { useState } from "react";
import { ChevronDown, ChevronRight, Plus } from "lucide-react";
import styles from "./DeployedStrategies.module.css";

const DeployedStrategies = () => {
  const [expandedBroker, setExpandedBroker] = useState<string | null>(null);
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null);

  const brokers = [
    { id: "zerodha", name: "Zerodha" },
    { id: "icici", name: "ICICI Direct" },
    { id: "upstox", name: "Upstox" },
  ];

  const strategies = [
    "NIFTY Momentum Strategy",
    "BANKNIFTY Scalping Strategy",
    "SENSEX Trend Following",
  ];

  return (
    <div className={styles.container}>
      {/* Status Row */}
      <div className={styles.statusRow}>
        <span className={styles.live}>Live: 8</span>
        <span className={styles.paper}>Paper: 3</span>
        <span className={styles.stopped}>Stopped: 2</span>
        <span className={styles.paused}>Paused: 5</span>
      </div>

      {/* Brokers */}
      {brokers.map((broker) => (
        <div key={broker.id} className={styles.brokerCard}>
          {/* Broker Header */}
          <div
            className={styles.brokerHeader}
            onClick={() =>
              setExpandedBroker(expandedBroker === broker.id ? null : broker.id)
            }
          >
            <div className={styles.brokerInfo}>
              {expandedBroker === broker.id ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
              <div>
                <div className={styles.brokerName}>{broker.name}</div>
                <div className={styles.brokerStatus}>Connected</div>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.startButton}>Start All</button>
              <button className={styles.stopButton}>Stop All</button>
            </div>
          </div>

          {/* Broker Expanded Section */}
          {expandedBroker === broker.id && (
            <div className={styles.brokerExpanded}>
              {/* Open / Pending / Archived */}
              <div className={styles.strategyStatusRow}>
                <span className={styles.open}>Open (2)</span>
                <span className={styles.pending}>Pending (1)</span>
                <span className={styles.archived}>Archived (5)</span>
              </div>

              {/* Strategies */}
              {strategies.map((strategy) => (
                <div key={strategy} className={styles.strategyCard}>
                  {/* Strategy Header */}
                  <div
                    className={styles.strategyHeader}
                    onClick={() =>
                      setExpandedStrategy(
                        expandedStrategy === strategy ? null : strategy
                      )
                    }
                  >
                    {expandedStrategy === strategy ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    )}
                    <span className={styles.strategyName}>{strategy}</span>
                  </div>

                  {/* Strategy Expanded Table */}
                  {expandedStrategy === strategy && (
                    <div className={styles.tableWrapper}>
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>Symbol</th>
                            <th>Type</th>
                            <th>Qty</th>
                            <th>Entry Price</th>
                            <th>Current Price</th>
                            <th>P&L</th>
                            <th>Entry Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>NIFTY 21JUL 22500 CE</td>
                            <td className={styles.buy}>BUY</td>
                            <td>50</td>
                            <td>185.40</td>
                            <td>192.65</td>
                            <td className={styles.profit}>+₹1,625</td>
                            <td>10:15 AM</td>
                            <td>Active</td>
                            <td>–</td>
                          </tr>
                          <tr>
                            <td>NIFTY 21JUL 22000 PE</td>
                            <td className={styles.sell}>SELL</td>
                            <td>50</td>
                            <td>120.75</td>
                            <td>104.50</td>
                            <td className={styles.profit}>+₹825</td>
                            <td>10:18 AM</td>
                            <td>Active</td>
                            <td>–</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Add new button */}
      <div className={styles.addNewWrapper}>
        <button className={styles.addNewButton}>
          <Plus size={18} />
          Add New
        </button>
      </div>
    </div>
  );
};

export default DeployedStrategies;