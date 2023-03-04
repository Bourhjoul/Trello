import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { MainLayout } from '../Components/Layouts/MainLayout';

interface AppProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#007991',
    },
    secondary: {
      main: '#4A0D67',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 12px 2px rgba(0,0,0,0.3)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 50,
          minHeight: 32,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
  },
});

export function AppProviders({ children }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>{children}</MainLayout>;
    </ThemeProvider>
  );
}
