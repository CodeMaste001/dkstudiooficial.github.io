import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Fade, Avatar, Paper, useTheme } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import { styled } from '@mui/material/styles';

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 12px 24px ${theme.palette.primary.main}25`,
    '& .MuiCardMedia-root::after': {
      opacity: 0.7,
    },
  },
  backgroundColor: theme.palette.background.paper,
  borderRadius: '12px',
  margin: theme.spacing(1),
  boxShadow: `0 8px 16px ${theme.palette.primary.main}15`,
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(0.5),
  },
  [theme.breakpoints.down('md')]: {
    '& .MuiCardContent-root': {
      padding: theme.spacing(1.5),
    },
  }
}));

const ProjectMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '75%', // 4:3 aspect ratio for mobile
  },
}));

const minecraftAchievements = [
  {
    id: 1,
    title: 'DKSafio',
    description: '100 días sobrevividos en modo Hardcore sin morir. Enfrentando peligros mortales y construyendo un imperio. DKsafio es una versión fan hecha con pasión y dedicación, inspirada en "El Dedsafío". Tú y tus amigos pueden enfrentarse a desafíos únicos, combinando creatividad, ingenio y trabajo en equipo. Aquí, lo importante no es solo superar las pruebas, sino disfrutar el proceso y demostrar que, con determinación, cualquier reto puede ser conquistado.',
    image: 'https://media.discordapp.net/attachments/1356038487861755965/1358548360549896222/Imagen_de_WhatsApp_2025-04-06_a_las_14.36.34_456ec914.jpg?ex=67f43e41&is=67f2ecc1&hm=b59cb4312852b13e7b8e78b01bf2bb21668a9fe3410229aa49edf9cca77498a3&=&format=webp&width=1440&height=803',
    badges: ['100 Días', 'Sin Muertes', 'Base Fortificada'],
    creators: [
      {
        name: 'Alex',
        avatar: 'https://images-ext-1.discordapp.net/external/gqI6zQAJxg38vVbbQm-uW3vOriRULs418DqyrKWpdKE/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1212135719523328011/447b0539acdd14c4719d90cc0bc598f5.png?format=webp&quality=lossless&width=545&height=545',
        verified: true
      },
      {
        name: 'Isaiproyt',
        avatar: 'https://images-ext-1.discordapp.net/external/MnNBKnYffMYrpBJSq7kkob3tlhHhkzT-xRePZO3U_yY/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/824840160025116722/b6d0d85f8c4513ccb43f879a3788cd8c.png?format=webp&quality=lossless&width=548&height=548',
        verified: true
      }
    ]
  },
];

function Projects() {
  const theme = useTheme();
  const [loaded, setLoaded] = React.useState(false);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{
      py: { xs: 2, sm: 3, md: 4 },
      minHeight: '90vh',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.primary.dark}22 100%)`,
        transform: `translateY(${scrollY * 0.5}px)`,
        zIndex: -1,
      },
    }}>
      <Container maxWidth="lg">
        <Fade in={loaded} timeout={1000}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3rem'
              },
              mb: { xs: 2, sm: 3, md: 4 },
              mb: 3,
              background: 'linear-gradient(45deg, #00bcd4 30%, #f50057 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            DKOFICIAL presenta
          </Typography>
        </Fade>

        <Grid container spacing={3} justifyContent="center">
          {minecraftAchievements.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id} sx={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: `${project.id * 200}ms`,
            }}>
              <ProjectCard>
                <ProjectMedia
                  image={project.image}
                  title={project.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ mt: 0.5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ fontSize: '0.85rem', mb: 1 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5 }}>
                    {project.badges.map((badge, index) => (
                      <Typography
                        key={index}
                        variant="caption"
                        sx={{
                          backgroundColor: 'rgba(0, 188, 212, 0.1)',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          color: 'primary.main',
                          fontSize: '0.75rem'
                        }}
                      >
                        {badge}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {project.creators.map((creator, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Avatar src={creator.avatar} alt={creator.name} sx={{ width: 32, height: 32 }} />
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontSize: '0.8rem' }}>
                            {creator.name}
                            {creator.verified && (
                              <VerifiedIcon
                                sx={{ ml: 0.5, width: 14, height: 14, color: 'primary.main' }}
                              />
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;