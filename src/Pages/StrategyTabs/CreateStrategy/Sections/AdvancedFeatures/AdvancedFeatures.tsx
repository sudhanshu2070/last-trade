import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGear } from '@fortawesome/free-solid-svg-icons';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './AdvancedFeatures.module.css';

interface AdvancedFeaturesProps {
  onSave: () => void;
}

const AdvancedFeatures: React.FC<AdvancedFeaturesProps> = ({ onSave }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isExpanded, setIsExpanded] = useState(true);
  // const [enableAll, setEnableAll] = useState(false);// For future use, currently not implemented
  const [currentPopupOption, setCurrentPopupOption] = useState<string | null>(null);
  const [reEntryCycles, setReEntryCycles] = useState('');
  const [executionType, setExecutionType] = useState<'combined' | 'legwise'>('combined');

  const options = [
    'Combined Premium',
    'Move SL to Cost',
    'Exit All on SL/Target',
    'Pre-punch SL',
    'Wait & Trade',
    'Premium Difference',
    'Re-entry/Execute',
    'Trail SL'
  ];

  const popUpData = {
    alertInfo : 'Execute combined executes all strategy components as a single order. Execute leg-wise executes each component separately. Choices depend on strategy complexity and market conditions, affecting execution and risk management.'
  }

  const handleOptionChange = (option: string) => {
    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelected);
    // setEnableAll(newSelected.length === options.length);// For future use, currently not implemented

    // Show popup when enabling certain options
    if (!selectedOptions.includes(option) && ['Wait & Trade', 'Re-entry/Execute'].includes(option)) {
      setCurrentPopupOption(option);
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  {/* Enable All Options(for future) */}

  // const toggleEnableAll = () => {
  //    const newEnableAll = !enableAll;
  //   setEnableAll(newEnableAll);
  //   setSelectedOptions(newEnableAll ? [...options] : []);
  // };

  const handleClosePopup = () => {
    setCurrentPopupOption(null);
  };

  const handleSave = () => {
    onSave();
    handleClosePopup();
  };

  
  return (
    <div className={styles.section}>
      <div className={styles.sectionHeader} onClick={toggleExpand}>
        <h3 className={styles.sectionTitle}>
          <FontAwesomeIcon icon={faGear} />
          Advanced Features
        </h3>
        <div className={styles.headerControls}>
          {isExpanded && (
            <div className={styles.enableAllContainer} onClick={(e) => e.stopPropagation()}>
              
              {/* Enable All Options(for future) */}
              {/* <span className={styles.enableAllText}>Enable All</span>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={enableAll}
                  onChange={toggleEnableAll}
                  className={styles.toggleInput}
                />
                <span className={styles.toggleSlider}></span>
              </label> */}

            </div>
          )}
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={`${styles.chevron} ${isExpanded ? styles.expanded : ''}`}
          />
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.toggleGrid}>
          {options.map((option) => (
            <div key={option} className={styles.toggleContainer}>
              <span className={styles.toggleText}>{option}</span>
              <label className={styles.toggleSwitch}>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                  className={styles.toggleInput}
                />
                <span className={styles.toggleSlider}></span>
              </label>
            </div>
          ))}
        </div>
      )}

       {/* Popup Dialog */}
      <Dialog 
        open={!!currentPopupOption} 
        onClose={handleClosePopup}
        PaperProps={{
          style: {
            width: '500px', 
            borderRadius: '16px', 
          }
        }}
      >
        <DialogTitle sx={{ fontSize: '1.2rem', fontWeight: '600' }}>
          {currentPopupOption}
        </DialogTitle>
        
        <DialogContent>
          <Alert severity="info" sx={{ mb: 2, borderRadius: '8px' }}>
            {popUpData.alertInfo}
          </Alert>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            marginBottom: '10px',
            padding: '8px 0'
          }}>
            <div className={styles.toggleButtonGroup}>
              <button
                className={`${styles.toggleButton} ${styles.leftButton} ${executionType === 'combined' ? styles.active : ''}`}
                onClick={() => setExecutionType('combined')}
              >
                Combined
              </button>
              <button
                className={`${styles.toggleButton} ${styles.rightButton} ${executionType === 'legwise' ? styles.active : ''}`}
                onClick={() => setExecutionType('legwise')}
              >
                Leg Wise
              </button>
            </div>
          </div>

          <TextField
            fullWidth
            label="Re-Entry/Execute cycles"
            placeholder="Re-Entry/Execute cycles"
            value={reEntryCycles}
            onChange={(e) => setReEntryCycles(e.target.value)}
            sx={{ 
              mt: 2,
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              }
            }}
          />
        </DialogContent>
        
        <DialogActions sx={{ padding: '16px 24px' }}>
          <Button 
            onClick={handleClosePopup} 
            sx={{ 
              borderRadius: '8px',
              padding: '8px 16px',
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            variant="contained" 
            sx={{ 
              borderRadius: '8px',
              padding: '8px 16px',
              textTransform: 'none'
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default AdvancedFeatures;