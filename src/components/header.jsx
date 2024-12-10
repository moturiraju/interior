import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './designspacelogo.png';
function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" sx={{ backgroundColor: '#006E33', boxShadow: 3 }}>
      <Toolbar>
        {/* Logo or Icon */}
        <MenuIcon></MenuIcon>
        <IconButton
          src={logo} // Use relative path if placed in the public folder
          sx={{ height: 40, mr: 1 }} // Adjust height and margin as needed
        />

        
        {/* Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Designespace by Asmitha
        </Typography>
        
        {/* Navigation Links */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {['About', 'Services', 'Contact', 'Login', 'Signup'].map((item) => (
              <Button key={item} color="inherit" component={Link} to={`/${item.toLowerCase()}`}>
              {item}
            </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
