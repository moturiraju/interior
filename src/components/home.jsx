import { Box, Typography } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        height: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 4px #000',
        backgroundImage: "url('hero-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h2">Bring Your Vision to Life</Typography>
    </Box>
  );
}

export default Hero;
