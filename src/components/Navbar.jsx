import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const LogoTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <StyledToolbar>
        <Box component={RouterLink} to="/" sx={{ textDecoration: 'none' }}>
          <LogoTypography variant="h5">
            DKStudio
          </LogoTypography>
        </Box>
        <Box>
          <NavButton
            component={RouterLink}
            to="/"
            color="primary"
            variant="text"
          >
            Inicio
          </NavButton>
          <NavButton
            component={RouterLink}
            to="/projects"
            color="primary"
            variant="text"
          >
            Proyectos
          </NavButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;