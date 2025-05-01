import React, { useState } from 'react';
import styles from './MarketSection.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data for Different Indices
const marketData = {
  nifty: [
    { name: '9:15', value: 19500 },
    { name: '10:00', value: 19550 },
    { name: '11:00', value: 19620 },
    { name: '12:00', value: 19580 },
    { name: '13:00', value: 19650 },
    { name: '14:00', value: 19630 },
    { name: '15:00', value: 19680 },
    { name: '15:30', value: 19700 },
  ],
  banknifty: [
    { name: '9:15', value: 45000 },
    { name: '10:00', value: 45100 },
    { name: '11:00', value: 45200 },
    { name: '12:00', value: 45150 },
    { name: '13:00', value: 45300 },
    { name: '14:00', value: 45250 },
    { name: '15:00', value: 45400 },
    { name: '15:30', value: 45500 },
  ],
  sensex: [
    { name: '9:15', value: 65000 },
    { name: '10:00', value: 65100 },
    { name: '11:00', value: 65200 },
    { name: '12:00', value: 65150 },
    { name: '13:00', value: 65300 },
    { name: '14:00', value: 65250 },
    { name: '15:00', value: 65400 },
    { name: '15:30', value: 65500 },
  ],
};

const MarketSection: React.FC = () => {
  // State for Selected Index
  const [selectedIndex, setSelectedIndex] = useState<'nifty' | 'banknifty' | 'sensex'>('nifty');

  // Get Current Data Based on Selected Index
  const currentData = marketData[selectedIndex];
  const currentValue = currentData[currentData.length - 1].value;
  const previousValue = currentData[currentData.length - 2].value;
  const change = currentValue - previousValue;
  const changePercent = (change / previousValue) * 100;
  const isPositive = change >= 0;

  return (
    <div className={styles.marketContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Market Watch</h3>
        <div className={styles.priceInfo}>
          {/* Dropdown for Index Selection */}
          <select
            className={styles.indexDropdown}
            value={selectedIndex}
            onChange={(e) => setSelectedIndex(e.target.value as 'nifty' | 'banknifty' | 'sensex')}
          >
            <option value="nifty">Nifty 50</option>
            <option value="banknifty">Bank Nifty</option>
            <option value="sensex">Sensex</option>
          </select>
          <span className={styles.currentPrice}>{currentValue.toLocaleString('en-IN')}</span>
          <span className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
            {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      {/* Chart Container */}
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={currentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--divider)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              domain={['auto', 'auto']} 
              tick={{ fill: 'var(--text-secondary)', fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              width={40}
            />
            <Tooltip 
              contentStyle={{
                background: 'var(--background-paper)',
                border: '1px solid var(--divider)',
                borderRadius: '6px',
                fontSize: '12px',
                padding: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="var(--primary-main)" 
              strokeWidth={2} 
              dot={false}
              activeDot={{ 
                r: 4,
                stroke: 'var(--background-paper)',
                strokeWidth: 1,
                fill: 'var(--primary-main)'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MarketSection;