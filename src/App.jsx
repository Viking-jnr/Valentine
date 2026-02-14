import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import ValentineCard from './components/ValentineCard';

const theme = createTheme({
  typography: {
    fontFamily: "'Georgia', serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <ValentineCard />
      </Box>
    </ThemeProvider>
  );
}

export default App;
