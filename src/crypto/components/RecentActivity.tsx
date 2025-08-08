export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Recent Strategy Activity</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        <li>📈 BTC Breakout Strategy executed on Binance (1h ago)</li>
        <li>📉 ETH Mean Reversion paused (3h ago)</li>
        <li>🛠️ New Strategy Draft saved (yesterday)</li>
      </ul>
    </div>
  );
}
