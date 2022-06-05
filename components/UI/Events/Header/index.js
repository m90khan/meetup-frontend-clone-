import { Box, Heading, Link } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Box
      marginBottom={8}
      display={'flex'}
      alignItems='center'
      justifyContent={'space-between'}
    >
      <Box>
        <Heading alignItems={'center'} as={'h3'} size='lg'>
          Upcoming online events
        </Heading>
      </Box>
      <Box>
        <Link fontWeight={'semibold'} color='teal.500'>
          Explore more events
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
