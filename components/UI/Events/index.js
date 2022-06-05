import { Box, Container, Grid, Heading, Link } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import RenderEvents from './RenderEvents';

const Events = () => {
  return (
    <Box mt={20}>
      <Container maxWidth={'container.xl'}>
        <Header />
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)',
            xl: 'repeat(4, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          <RenderEvents />
        </Grid>
      </Container>
    </Box>
  );
};

export default Events;
