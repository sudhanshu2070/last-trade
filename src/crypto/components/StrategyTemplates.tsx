export default function StrategyTemplates() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-3">Strategy Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border rounded p-3 hover:shadow cursor-pointer">
          <h3 className="font-medium">Scalping Strategy</h3>
          <p className="text-sm text-gray-600">High-frequency trades on 1-minute charts</p>
        </div>
        <div className="border rounded p-3 hover:shadow cursor-pointer">
          <h3 className="font-medium">Swing Strategy</h3>
          <p className="text-sm text-gray-600">Trades based on daily support/resistance</p>
        </div>
      </div>
    </div>
  );
}
