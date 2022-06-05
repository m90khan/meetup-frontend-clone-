import { Box, Button, Heading, Link } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box display='flex' alignItems='center'>
      <Heading size='md'>Create your own Meetup group.</Heading>
      <Button ml='4' colorScheme='white' variant='outline'>
        Get Started
      </Button>
    </Box>
  );
};

export default Header;
