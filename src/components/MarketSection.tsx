import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const niftyData = [
  { name: '9:15', value: 19500 },
  { name: '10:00', value: 19550 },
  { name: '11:00', value: 19620 },
  { name: '12:00', value: 19580 },
  { name: '13:00', value: 19650 },
  { name: '14:00', value: 19630 },
  { name: '15:00', value: 19680 },
  { name: '15:30', value: 19700 },
];

const MarketSection: React.FC = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Nifty 50
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" sx={{ mr: 2 }}>
            19,700.00
          </Typography>
          <Typography variant="body1" color="success.main">
            +200.50 (+1.03%)
          </Typography>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={niftyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="name" />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#1976d2" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MarketSection;