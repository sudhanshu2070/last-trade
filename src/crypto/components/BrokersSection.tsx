export default function BrokersSection() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Brokers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium text-green-600">Active Brokers</h3>
          <ul className="text-sm text-gray-700 mt-1">
            <li>Binance</li>
            <li>Coinbase Pro</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium text-red-600">Inactive Brokers</h3>
          <ul className="text-sm text-gray-700 mt-1">
            <li>Kraken</li>
            <li>Bybit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}