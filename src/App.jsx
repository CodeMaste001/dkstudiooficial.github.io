import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,      // teléfonos pequeños
      sm: 375,    // iPhone y teléfonos Android
      md: 768,    // tablets y iPad mini
      lg: 1024,   // iPad y tablets grandes
      xl: 1280,   // desktop
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:375px)': {
        fontSize: '3rem',
      },
      '@media (min-width:768px)': {
        fontSize: '3.75rem',
      },
      '@media (min-width:1024px)': {
        fontSize: '4.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      '@media (min-width:375px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:768px)': {
        fontSize: '2rem',
      },
    },
    h6: {
      fontSize: '1rem',
      '@media (min-width:375px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:768px)': {
        fontSize: '1.25rem',
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width:375px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@media (min-width:768px)': {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;