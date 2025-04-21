import React from 'react';
import { Box, Button } from '@mui/material';
import { AccountBalanceWallet, Send } from '@mui/icons-material';

const TradeButtons: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AccountBalanceWallet />}
        size="large"
        sx={{ height: '56px' }}
      >
        Connect Broker
      </Button>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Send />}
        size="large"
        sx={{ height: '56px' }}
      >
        Execute Trade
      </Button>
    </Box>
  );
};

export default TradeButtons;