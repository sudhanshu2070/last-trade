import React, { useState } from 'react';
import styles from './BacktestPage.module.css';

const BacktestPage: React.FC = () => {
  const [symbol, setSymbol] = useState('ETHUSDT');
  const [resolution, setResolution] = useState('5m');
  const [brickSize, setBrickSize] = useState('40');
  const [reversal, setReversal] = useState('80');
  const [startDate, setStartDate] = useState('2023-08-01');
  const [endDate, setEndDate] = useState('2023-08-02');
  const [sourceType, setSourceType] = useState('ohlc4');
  const [tenkanPeriod, setTenkanPeriod] = useState('9');
  const [kijunPeriod, setKijunPeriod] = useState('26');
  const [spanBPeriod, setSpanBPeriod] = useState('52');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [csvData, setCsvData] = useState<any>(null);
  const [results, setResults] = useState<any>(null);

  const handleBacktest = async () => {
    setLoading(true);
    setError('');
    setCsvData(null);
    setResults(null);

    try {
      console.log('Sending request with:', {
        symbol,
        resolution,
        start_date: startDate,
        end_date: endDate,
        brick_size: parseFloat(brickSize),
        reversal_size: parseFloat(reversal),
        source_type: sourceType,
        tenkan: parseInt(tenkanPeriod),
        kijun: parseInt(kijunPeriod),
        span_b: parseInt(spanBPeriod)
      });

      const response = await fetch('http://backtest-api.pwps.online/backtest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          symbol: symbol,
          resolution: resolution,
          start_date: startDate,
          end_date: endDate,
          brick_size: parseFloat(brickSize) || 40,
          reversal_size: parseFloat(reversal) || 80,
          source_type: sourceType,
          tenkan: parseInt(tenkanPeriod) || 9,
          kijun: parseInt(kijunPeriod) || 26,
          span_b: parseInt(spanBPeriod) || 52
        }),
      });

      console.log('Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.success) {
        setCsvData(data.csv_files);
        setResults(data.summary);
      } else {
        setError(data.error || 'Backtest failed. Please try again.');
      }
    } catch (err: any) {
      console.error('Backtest error:', err);
      setError(err.message || 'Error connecting to server.');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = (csvContent: string, filename: string) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Backtest Renko Strategy</h1>

      <div className={styles.form}>
        {/* Symbol */}
        <div className={styles.formGroup}>
          <label>Symbol:</label>
          <select value={symbol} onChange={(e) => setSymbol(e.target.value)}>
            <option value="ETHUSDT">ETHUSDT</option>
            <option value="BTCUSDT">BTCUSDT</option>
            <option value="BNBUSDT">BNBUSDT</option>
          </select>
        </div>

        {/* Timeframe */}
        <div className={styles.formGroup}>
          <label>Timeframe:</label>
          <select value={resolution} onChange={(e) => setResolution(e.target.value)}>
            <option value="1m">1 Minute</option>
            <option value="5m">5 Minutes</option>
            <option value="15m">15 Minutes</option>
            <option value="30m">30 Minutes</option>
            <option value="1h">1 Hour</option>
            <option value="1d">1 Day</option>
          </select>
        </div>

        {/* Date Range */}
        <div className={styles.formGroup}>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* Brick Size */}
        <div className={styles.formGroup}>
          <label>Brick Size:</label>
          <input
            type="number"
            step="0.1"
            value={brickSize}
            onChange={(e) => setBrickSize(e.target.value)}
            placeholder="e.g. 40"
          />
        </div>

        {/* Reversal */}
        <div className={styles.formGroup}>
          <label>Reversal:</label>
          <input
            type="number"
            step="0.1"
            value={reversal}
            onChange={(e) => setReversal(e.target.value)}
            placeholder="e.g. 80"
          />
        </div>

        {/* Source Type */}
        <div className={styles.formGroup}>
          <label>Source Type:</label>
          <select value={sourceType} onChange={(e) => setSourceType(e.target.value)}>
            <option value="close">Close</option>
            <option value="open">Open</option>
            <option value="high">High</option>
            <option value="low">Low</option>
            <option value="hl2">HL2 (High+Low/2)</option>
            <option value="hlc3">HLC3 (High+Low+Close/3)</option>
            <option value="ohlc4">OHLC4 (Open+High+Low+Close/4)</option>
          </select>
        </div>

        {/* Ichimoku Parameters */}
        <div className={styles.formGroup}>
          <label>Tenkan Period:</label>
          <input
            type="number"
            value={tenkanPeriod}
            onChange={(e) => setTenkanPeriod(e.target.value)}
            placeholder="9"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kijun Period:</label>
          <input
            type="number"
            value={kijunPeriod}
            onChange={(e) => setKijunPeriod(e.target.value)}
            placeholder="26"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Span B Period:</label>
          <input
            type="number"
            value={spanBPeriod}
            onChange={(e) => setSpanBPeriod(e.target.value)}
            placeholder="52"
          />
        </div>

        <button 
          className={styles.submitButton} 
          onClick={handleBacktest} 
          disabled={loading}
        >
          {loading ? 'Running Backtest...' : 'Run Backtest'}
        </button>

        {error && (
          <div className={styles.error}>
            <strong>Error:</strong> {error}
          </div>
        )}

        {/* Results Summary */}
        {results && (
          <div className={styles.results}>
            <h3>Backtest Results</h3>
            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <span>Symbol:</span>
                <span>{results.symbol || symbol}</span>
              </div>
              <div className={styles.resultItem}>
                <span>Renko Bricks:</span>
                <span>{results.renko_bricks}</span>
              </div>
              <div className={styles.resultItem}>
                <span>Trades:</span>
                <span>{results.trades}</span>
              </div>
              <div className={styles.resultItem}>
                <span>Net Profit:</span>
                <span className={results.net_profit >= 0 ? styles.profit : styles.loss}>
                  {results.net_profit?.toFixed(2)}
                </span>
              </div>
              <div className={styles.resultItem}>
                <span>Win Rate:</span>
                <span>{(results.win_rate * 100)?.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        )}

        {/* CSV Downloads */}
        {csvData && (
          <div className={styles.downloads}>
            <h3>Download Results</h3>
            <div className={styles.downloadButtons}>
              <button 
                className={styles.downloadButton}
                onClick={() => downloadCSV(csvData.renko_data, `renko_${symbol}_${startDate}_to_${endDate}.csv`)}
              >
                📊 Renko Data
              </button>
              <button 
                className={styles.downloadButton}
                onClick={() => downloadCSV(csvData.trades_data, `trades_${symbol}_${startDate}_to_${endDate}.csv`)}
              >
                💰 Trades Data
              </button>
              <button 
                className={styles.downloadButton}
                onClick={() => downloadCSV(csvData.summary_data, `summary_${symbol}_${startDate}_to_${endDate}.csv`)}
              >
                📈 Summary Data
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BacktestPage;