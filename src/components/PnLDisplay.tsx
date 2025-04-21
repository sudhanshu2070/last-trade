import React from 'react';
import { Box, Typography } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

const PnLDisplay: React.FC = () => {
  const pnlValue = 12500.75;
  const isProfit = pnlValue >= 0;

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 2,
      p: 3,
      borderRadius: 2,
      bgcolor: 'background.paper',
      boxShadow: 2,
    }}>
      <Typography variant="h6">PNL:</Typography>
      <Typography 
        variant="h4" 
        color={isProfit ? 'success.main' : 'error.main'}
        sx={{ fontWeight: 'bold' }}
      >
        {isProfit ? '+' : ''}{pnlValue.toLocaleString('en-IN', {
          style: 'currency',
          currency: 'INR',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
      {isProfit ? (
        <TrendingUp color="success" sx={{ fontSize: 40 }} />
      ) : (
        <TrendingDown color="error" sx={{ fontSize: 40 }} />
      )}
    </Box>
  );
};

export default PnLDisplay;