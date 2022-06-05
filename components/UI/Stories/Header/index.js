import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box mb='7' display='flex' alignItems='center' justifyContent='space-between'>
      <Box align='center' w='100%'>
        <Heading alignItems='center' as='h3' size='lg' pb='2'>
          Stories from Meetups
        </Heading>
        <Box maxW='560px'>
          People on Meetup have fostered community, learned new skills, started
          businesses, and made life-long friends. Learn how.
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
