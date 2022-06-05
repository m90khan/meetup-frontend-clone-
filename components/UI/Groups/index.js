import { Box, Container, Grid } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';
import RenderGroups from './RenderGroups';

const Groups = () => {
  return (
    <Box mt={20}>
      <Container maxWidth={'container.xl'}>
        <Header />
        <Grid
          templateColumns={{
            sm: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          <RenderGroups />
        </Grid>
      </Container>
    </Box>
  );
};

export default Groups;
