import React, { useState, useRef, useEffect } from 'react';
import styles from './MyStrategies.module.css'; 
import { FaPlay, FaPlus, FaSearch, FaEllipsisV, FaEdit, FaCopy, FaTrash, FaTimes } from 'react-icons/fa';
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
  const [deployPopup, setDeployPopup] = useState<{open: boolean, strategy: any}>({open: false, strategy: null});
  const [formData, setFormData] = useState({
    quantityMultiplier: 1,
    broker: 'Zerodha',
    deploymentType: 'Live Trading',
    acceptTerms: false
  });

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

    const handleDeployClick = (strategy: typeof initialStrategies[number]) => {
    setDeployPopup({open: true, strategy});
  };

  const handleClosePopup = () => {
    setDeployPopup({open: false, strategy: null});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDeploySubmit = () => {
    console.log('Deploying:', deployPopup.strategy.title, 'with options:', formData);
    handleClosePopup();
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
                <button className={styles.backtestButton} onClick={() => navigate('/backtest')}><FaPlay /> Backtest</button>
                <button 
                  className={styles.deployButton}
                  onClick={() => handleDeployClick(strategy)}
                  >Deploy</button>
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

      {/* Deploy Popup */}
      {deployPopup.open && (
        <div className={styles.deployPopupOverlay}>
          <div className={styles.deployPopup}>
            <div className={styles.popupHeader}>
              <h3>Deploy Strategy</h3>
              <button className={styles.closeButton} onClick={handleClosePopup}>
                <FaTimes />
              </button>
            </div>
            
            <div className={styles.popupContent}>
              <p>Deploy "{deployPopup.strategy.title}" to market</p>
              
               {/* Add Margin Required section here */}
              <div className={styles.marginInfo}>
                <div className={styles.marginRow}>
                  <span className={styles.marginLabel}>Margin Required:</span>
                  <span className={styles.marginValue}>
                    ₹{25000 * formData.quantityMultiplier}
                  </span>
                </div>
                <p className={styles.helperText}>
                  This is the estimated margin required for deployment
                </p>
              </div>

              <div className={styles.formGroup}>
                <label>Quantity Multiplier</label>
                <input
                  type="number"
                  name="quantityMultiplier"
                  value={formData.quantityMultiplier}
                  onChange={handleInputChange}
                  min="1"
                />
                <p className={styles.helperText}>Multiplies the base quantity defined in the strategy</p>
              </div>
              
              <div className={styles.formGroup}>
                <label>Select Broker</label>
                <select 
                  name="broker"
                  value={formData.broker}
                  onChange={handleInputChange}
                >
                  <option value="Zerodha">Zerodha</option>
                  <option value="AngelOne">AngelOne</option>
                  <option value="Upstox">Upstox</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label>Deployment Type</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input
                      type="radio"
                      name="deploymentType"
                      value="Live Trading"
                      checked={formData.deploymentType === 'Live Trading'}
                      onChange={handleInputChange}
                    />
                    Live Trading
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="deploymentType"
                      value="Paper Trading"
                      checked={formData.deploymentType === 'Paper Trading'}
                      onChange={handleInputChange}
                    />
                    Paper Trading
                  </label>
                </div>
              </div>
              
              <div className={styles.termsCheckbox}>
                <label>
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                  />
                  I accept the terms and conditions and understand the risks involved in algorithmic trading
                </label>
              </div>
            </div>
            
            <div className={styles.popupFooter}>
              <button className={styles.cancelButton} onClick={handleClosePopup}>
                Cancel
              </button>
              <button 
                className={styles.confirmButton}
                onClick={handleDeploySubmit}
                disabled={!formData.acceptTerms}
              >
                Deploy Strategy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStrategies;