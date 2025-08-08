import CryptoTopNavbar from './components/CryptoTopNavbar';
import CryptoSidebar from './components/CryptoSidebar';
import CryptoDashboard from './components/CryptoDashboard';

export default function CryptoPage() {
  return (
    <div className="h-screen flex flex-col">
      {/* Top Navbar */}
      <CryptoTopNavbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <CryptoSidebar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <CryptoDashboard />
        </main>
      </div>
    </div>
  );
}
