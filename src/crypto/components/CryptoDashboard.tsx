import BrokersSection from './BrokersSection';
import MarketWatchSection from './MarketWatchSection';
import RecentActivity from './RecentActivity';
import StrategyTemplates from './StrategyTemplates';

export default function CryptoDashboard() {
  return (
    <div className="space-y-6">
      {/* Top grid: Brokers + Market Watch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <BrokersSection />
        </div>
        <div>
          <MarketWatchSection />
        </div>
      </div>

      {/* Recent Activity */}
      <RecentActivity />

      {/* Strategy Templates */}
      <StrategyTemplates />
    </div>
  );
}
