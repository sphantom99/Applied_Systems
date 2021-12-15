import React from 'react';
import {
  Box, Typography, Container,
} from '@material-ui/core';

export default function AppFooter() {
  return (
    <footer
      style={{
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
      }}
    >
      <Box
        style={{
          backgroundColor: '#194b8c',
          left: 0,
          right: 0,
          bottom: 0,
          position: 'relative',
          width: '100%',
          marginTop: 'calc(5% + 60px)',
          padding: '30px',
          justifyItems: 'center',
          textAlign: 'center',
        }}
        position="sticky"
      >
        <Container>
          <Typography style={{ color: 'white' }}>© ONE STOP STARTUP</Typography>
          <Typography style={{ color: 'white' }}>Designed & Developed by DREAMTEAM</Typography>
        </Container>
      </Box>
    </footer>
  );
}
