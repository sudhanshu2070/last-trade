import React from 'react';
import styles from './MarketSection.module.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const niftyData = [
  { name: '9:15', value: 19500 },
  { name: '10:00', value: 19550 },
  { name: '11:00', value: 19620 },
  { name: '12:00', value: 19580 },
  { name: '13:00', value: 19650 },
  { name: '14:00', value: 19630 },
  { name: '15:00', value: 19680 },
  { name: '15:30', value: 19700 },
];

const MarketSection: React.FC = () => {
  const currentValue = 19700.00;
  const change = +200.50;
  const changePercent = +1.03;
  const isPositive = change >= 0;

  return (
    <div className={styles.marketContainer}>
      <div className={styles.header}>
        <h3 className={styles.title}>Market Watch</h3>
        <div className={styles.priceInfo}>
          <span className={styles.indexName}>Nifty 50</span>
          <span className={styles.currentPrice}>{currentValue.toLocaleString('en-IN')}</span>
          <span className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
            {isPositive ? '+' : ''}{change.toFixed(2)} ({isPositive ? '+' : ''}{changePercent.toFixed(2)}%)
          </span>
        </div>
      </div>
      
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={niftyData}>
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