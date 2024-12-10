import { Box, Card, CardContent, Typography } from '@mui/material';

function Services() {
  const services = [
    { title: 'Residential Design', description: 'Tailored designs for homes to reflect your unique lifestyle.' },
    { title: 'Commercial Design', description: 'Innovative and efficient solutions for offices and businesses.' },
    { title: 'Space Planning', description: 'Maximizing the potential of every space with creative planning.' },
  ];

  return (
    <Box sx={{ p: 3, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
      {services.map((service, index) => (
        <Card key={index} sx={{ width: 300, textAlign: 'center', boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">{service.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default Services;
