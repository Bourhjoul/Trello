import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';

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
          borderRadius: '5px',
          boxShadow: 'none',
        },
        contained: {
          background: '#c5ffe3',
          color: '#007991',
          ':hover': {
            background: 'rgb(0 121 145 / 4%)',
            boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export function AppProviders({ children }: AppProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
