import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, #121212 30%, #1e1e1e 90%)',
    zIndex: -1,
  },
}));

const GradientText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #00bcd4 30%, #f50057 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  mb: { xs: 2, sm: 3, md: 4 },
  fontSize: {
    xs: '2.5rem',
    sm: '3.5rem',
    md: '4rem'
  },
  lineHeight: {
    xs: 1.2,
    sm: 1.3,
    md: 1.4
  }
}));

function Home() {
  return (
    <HeroSection>
      <Container maxWidth="md">
        <GradientText variant="h1" component="h1" gutterBottom>
          DKStudio
        </GradientText>
        <Typography 
          variant="h4" 
          color="primary" 
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem'
            }
          }}
        >
          Creando Experiencias Digitales Únicas
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary" 
          paragraph 
          sx={{ 
            mb: 6,
            fontSize: {
              xs: '1rem',
              sm: '1.1rem',
              md: '1.25rem'
            },
            px: { xs: 2, sm: 4, md: 0 }
          }}
        >
          Somos un estudio creativo especializado en el desarrollo de proyectos innovadores
          que transforman ideas en experiencias digitales memorables.
        </Typography>
        <Button
          component={RouterLink}
          to="/projects"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: '28px',
            padding: '12px 32px',
            fontSize: '1.2rem',
            textTransform: 'none',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          Ver Nuestros Proyectos
        </Button>
      </Container>
    </HeroSection>
  );
}

export default Home;