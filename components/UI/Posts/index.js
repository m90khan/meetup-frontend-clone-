import { Box, Button, Container, Grid, Image } from '@chakra-ui/react';
import React from 'react';

const Posts = () => {
  return (
    <Container maxW='container.xl' mt={10}>
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
        <Box>
          <Image
            w='100%'
            borderRadius='lg'
            src={'/assets/image-one.jpg'}
            alt='image one'
          />
          <Button colorScheme='teal' variant='link' mt='5'>
            Make new friend ▶
          </Button>
        </Box>
        <Box>
          <Image
            w='100%'
            borderRadius='lg'
            src={'/assets/image-two.jpg'}
            alt='image two'
          />
          <Button colorScheme='teal' variant='link' mt='5'>
            Explore the outdoors ▶
          </Button>
        </Box>
        <Box>
          <Image
            w='100%'
            borderRadius='lg'
            src={'/assets/image-three.jpg'}
            alt='image three'
          />
          <Button colorScheme='teal' variant='link' mt='5'>
            Connect over tech ▶
          </Button>
        </Box>
      </Grid>
    </Container>
  );
};

export default Posts;
