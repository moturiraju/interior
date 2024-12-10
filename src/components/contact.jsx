import React from 'react';
import { Container, Box, Typography, Divider } from '@mui/material';

function ContactDetails() {
  const contactInfo = {
    name: 'Asmitha Gannarapu',
    phoneNumber: '9876543211',
    email: 'johndoe@example.com',
    address: '1234 Elm Street, Anytown, USA'
  };

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Contact Details
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="body1">
            <strong>Name:</strong> {contactInfo.name}
          </Typography>
          <Typography variant="body1">
            <strong>Phone Number:</strong> {contactInfo.phoneNumber}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {contactInfo.email}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {contactInfo.address}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactDetails;
