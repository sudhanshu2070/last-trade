import React, { useState, useRef, useEffect } from 'react';
import styles from './MyStrategies.module.css'; 
import { FaPlay, FaPlus, FaSearch, FaEllipsisV, FaEdit, FaCopy, FaTrash } from 'react-icons/fa';
import { FaClock, FaChartLine, FaCogs, FaBolt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const initialStrategies = [
  {
    id: 1,
    title: 'Nifty Gap & Go Strategy',
    description: 'Time-based • Nifty • Updated 05 May 2025',
    icon: <FaClock />,
  },
  {
    id: 2,
    title: 'BankNifty Reversal Setup',
    description: 'Indicator-based • BankNifty • Updated 20 Apr 2025',
    icon: <FaChartLine />,
  },
  {
    id: 3,
    title: 'Weekly Straddle Strategy',
    description: 'Options-based • Nifty • Updated 12 Mar 2025',
    icon: <FaCogs />,
  },
  {
    id: 4,
    title: 'Momentum Intraday Strategy',
    description: 'Time-based • FINNIFTY • Updated 30 May 2025',
    icon: <FaBolt />,
  }
];

const MyStrategies: React.FC = () => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [strategies, setStrategies] = useState(initialStrategies);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openMenuId !== null && 
          menuRefs.current[openMenuId] && 
          !menuRefs.current[openMenuId]?.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setStrategies(initialStrategies);
    } else {
      const filtered = initialStrategies.filter(strategy => 
        strategy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        strategy.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setStrategies(filtered);
    }
  }, [searchTerm]);

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handleAction = (action: string, strategyId: number) => {
    console.log(`${action} strategy ${strategyId}`);
    setOpenMenuId(null);
    // Add your action handlers here
  };

  const handleCreateClick = () => {
    navigate('/strategies/create');
    // window.location.reload();
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>My Strategies</h2>
        <button 
          className={styles.createButton}    
          onClick={handleCreateClick}>
            <FaPlus /> Create Strategy
        </button>
      </div>

      {/* Search Box */}
      <div className={styles.searchBox}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search strategies..."
          className={styles.searchInput}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Strategy List */}
      <div className={styles.strategyList}>
        {strategies.length > 0 ? (
          strategies.map((strategy) => (
            <div key={strategy.id} className={styles.strategyCard}>
              <div className={styles.strategyInfo}>
                <div className={styles.iconWrapper}>{strategy.icon}</div>
                <div>
                  <h3 className={styles.strategyTitle}>{strategy.title}</h3>
                  <p className={styles.strategyDescription}>{strategy.description}</p>
                </div>
              </div>
              <div className={styles.strategyActions}>
                <button className={styles.backtestButton}><FaPlay /> Backtest</button>
                <button className={styles.deployButton}>Deploy</button>
                <div className={styles.menuContainer} ref={el => { menuRefs.current[strategy.id] = el; }}>
                  <button 
                    className={styles.menuButton}
                    onClick={() => toggleMenu(strategy.id)}
                  >
                    <FaEllipsisV />
                  </button>
                  {openMenuId === strategy.id && (
                    <div className={styles.menuPopup}>
                      <button onClick={() => handleAction('Edit', strategy.id)}>
                        <FaEdit className={styles.menuIcon} /> Edit
                      </button>
                      <button onClick={() => handleAction('Duplicate', strategy.id)}>
                        <FaCopy className={styles.menuIcon} /> Duplicate
                      </button>
                      <button onClick={() => handleAction('Delete', strategy.id)}>
                        <FaTrash className={styles.menuIcon} /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noResults}>
            No strategies found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default MyStrategies;