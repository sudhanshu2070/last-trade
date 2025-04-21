import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { CheckCircle, Warning } from '@mui/icons-material';

const brokers = [
  { name: 'Zerodha', connected: true },
  { name: 'Angel One', connected: false },
  { name: 'Upstox', connected: true },
];

const BrokerConnection: React.FC = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Connected Brokers
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {brokers.map((broker) => (
          <Chip
            key={broker.name}
            label={broker.name}
            color={broker.connected ? 'success' : 'default'}
            icon={broker.connected ? <CheckCircle /> : <Warning />}
            variant={broker.connected ? 'filled' : 'outlined'}
            sx={{ px: 2 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BrokerConnection;