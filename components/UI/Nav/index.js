import React from 'react';
import { Box, Button, Image } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      ml={6}
      mr={6}
    >
      <Box>
        <Image boxSize={'90px'} src='/assets/brand-logo.svg' alt='meetup logo' />
      </Box>
      <Box>
        <Button pr={3} colorScheme='gray.600' fontSize={'sm'} variant='link'>
          Log in
        </Button>
        <Button pr={3} colorScheme='gray.600' fontSize={'sm'} variant='link'>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Nav;
