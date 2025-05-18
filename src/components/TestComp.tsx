import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FullPageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
  width: '79vw',
  backgroundColor: '#121212',
  color: '#e0e0e0',
  padding: '2rem',
  textAlign: 'center',
}));

const ContentBox = styled(Box)(() => ({
//   maxWidth: '800px',
  width: '100%',
  padding: '2rem',
  border: '1px solid #333',
  borderRadius: '8px',
  backgroundColor: '#1e1e1e',
}));

const TestComp: React.FC<{ name: string }> = ({ name }) => {
  return (
    <FullPageContainer>
      <ContentBox>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 500,
            color: '#ffffff',
            mb: 4
          }}
        >
          {name} Section
        </Typography>
        
        <Typography 
          variant="body1" 
          paragraph
          sx={{
            color: '#b0b0b0',
            mb: 4
          }}
        >
          This section is currently under development.
        </Typography>
        
        <Typography 
          variant="body2"
          sx={{
            color: '#757575',
            fontStyle: 'italic',
            mb: 4
          }}
        >
          We appreciate your patience as we work to bring you this feature.
        </Typography>
        
        <Typography 
          variant="body1"
          sx={{
            color: '#64b5f6',
            mt: 4
          }}
        >
          Contact support@profitwithprecision.com for immediate assistance
        </Typography>
      </ContentBox>
    </FullPageContainer>
  );
};

export default TestComp;