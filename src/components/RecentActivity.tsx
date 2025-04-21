import React from 'react';
import { Box, Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Chip } from '@mui/material';
import { CheckCircle, Cancel, AccessTime } from '@mui/icons-material';

const activities = [
  { id: 1, strategy: 'Nifty 50 Momentum', status: 'completed', time: '10:45 AM', pnl: '+1,250.00' },
  { id: 2, strategy: 'Bank Nifty Mean Reversion', status: 'failed', time: '11:30 AM', pnl: '-850.50' },
  { id: 3, strategy: 'IT Sector Breakout', status: 'pending', time: '12:15 PM', pnl: '0.00' },
  { id: 4, strategy: 'FMCG Trend Following', status: 'completed', time: '1:45 PM', pnl: '+2,100.75' },
];

const RecentActivity: React.FC = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle color="success" fontSize="small" />;
      case 'failed':
        return <Cancel color="error" fontSize="small" />;
      case 'pending':
        return <AccessTime color="warning" fontSize="small" />;
      default:
        return undefined;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'failed':
        return 'error';
      case 'pending':
        return 'warning';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Recent Strategy Activity
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Strategy</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Time</TableCell>
              <TableCell align="right">PNL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>{activity.strategy}</TableCell>
                <TableCell>
                  <Chip
                    label={activity.status}
                    color={getStatusColor(activity.status)}
                    icon={getStatusIcon(activity.status)}
                    size="small"
                    variant="outlined"
                  />
                </TableCell>
                <TableCell>{activity.time}</TableCell>
                <TableCell 
                  align="right" 
                  sx={{ 
                    fontWeight: 'bold', 
                    color: activity.pnl.startsWith('+') ? 'success.main' : 
                          activity.pnl.startsWith('-') ? 'error.main' : 'text.primary' 
                  }}
                >
                  {activity.pnl}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;