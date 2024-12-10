import { Box, Button } from '@mui/material';

function Navigation() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#333', p: 1 }}>
      {['About', 'Services', 'Portfolio', 'Contacts'].map((item) => (
        <Button key={item} href={`#${item.toLowerCase()}`} sx={{ color: 'white', mx: 1 }}>
          {item}
        </Button>
      ))}
    </Box>
  );
}

export default Navigation;
