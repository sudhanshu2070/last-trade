import { Link, useLocation } from 'react-router-dom';
import { classNames } from '../utils/classNames'; // Utility to toggle classes

const navItems = [
  { name: 'Dashboard', path: '/crypto' },
  { name: 'Brokers', path: '/crypto/brokers' },
  { name: 'Strategies', path: '/crypto/strategies' },
  { name: 'Backtest', path: '/crypto/backtest' },
];

export default function CryptoSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-white shadow-md h-full hidden md:block">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={classNames(
              'block px-4 py-2 rounded text-gray-700 hover:bg-gray-100',
              location.pathname === item.path && 'bg-gray-200 font-medium'
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
