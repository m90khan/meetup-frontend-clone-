import { Box, Image, Container, Heading, Grid, Link } from '@chakra-ui/react';
import Header from './Header';
import RenderStories from './RenderStories';

function Stories() {
  return (
    <Box mt={10}>
      <Container maxWidth='container.xl'>
        <Header />
        <Grid
          mt='10'
          mb='40'
          templateColumns={{
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(3, 1fr)',
            base: 'repeat(1, 1fr)',
          }}
          gap={6}
        >
          <RenderStories />
        </Grid>
      </Container>
    </Box>
  );
}

export default Stories;
