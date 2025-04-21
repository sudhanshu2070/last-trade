import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import BrokerConnection from './BrokerConnection';
import PnLDisplay from './PnLDisplay';
import TradeButtons from './TradeButtons';
import MarketSection from './MarketSection';
import RecentActivity from './RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Trading Dashboard
      </Typography>
      
      {/* Broker Connections */}
      <BrokerConnection />
      
      {/* PnL and Trade Buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, my: 4 }}>
        <PnLDisplay />
        <TradeButtons />
      </Box>
      
      {/* Market Section */}
      <MarketSection />
      
      {/* Recent Activity */}
      <RecentActivity />
    </Container>
  );
};

export default Dashboard;