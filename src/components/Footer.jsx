import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ backgroundColor: '#006E33', color: 'white', textAlign: 'center', py: 2,position: 'fixed',
      bottom: 0,width: '100%',padding: '10px' }}>
      <Typography variant="body2">&copy; 2024 Designespace by Asmitha. All rights reserved.</Typography>
    </Box>
  );
}

export default Footer;

