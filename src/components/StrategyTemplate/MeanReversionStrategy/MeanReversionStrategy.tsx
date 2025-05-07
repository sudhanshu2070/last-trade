import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import styles from './MeanReversionStrategy.module.css';

const MeanReversionStrategy: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          datasets: [{
            label: 'Delta Neutral Nifty Returns',
            data: [15, 58, 12, 60, 78, 124, 150, 93],
            borderColor: '#3b82f6', // same blue as line
            backgroundColor: 'rgba(59, 130, 246, 0.2)', // light blue fill
            fill: true,
            tension: 0.5, // smoother curve
            pointBackgroundColor: '#10b981',
            pointBorderColor: '#fff',
            pointRadius: 4,
            pointHoverRadius: 6,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(200,200,200,0.2)',
              },
            },
          },
        },
      });
    }
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const handleAddStrategy = () => {
    alert('Mean Reversion Strategy added!');
  };

  const handleBacktest = () => {
    alert('Running backtest for Strangle Strategy...');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Delta Neutral Nifty</h2>
        <div className={styles.metrics}>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Max DD</span>
            <span className={styles.metricValue}>-4.50%</span>
          </div>
          <div className={styles.metric}>
            <span className={styles.metricLabel}>Margin</span>
            <span className={styles.metricValue}>₹75,000</span>
          </div>
        </div>
      </div>
      <div className={styles.chartContainer}>
        <canvas ref={chartRef} className={styles.chart}></canvas>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleBacktest} className={styles.secondaryButton}>
          <span className={styles.buttonIcon}>📊</span> Backtest
        </button>
        <button onClick={handleAddStrategy} className={styles.primaryButton}>
          <span className={styles.buttonIcon}>+</span> Add to my strategy
        </button>
      </div>
    </div>
  );
};

export default MeanReversionStrategy;