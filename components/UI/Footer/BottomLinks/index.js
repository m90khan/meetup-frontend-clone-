import { Box, Link } from '@chakra-ui/react';
import React from 'react';

const BottomLinks = () => {
  return (
    <Box
      display='flex'
      mt='20'
      flexWrap={{
        sm: 'wrap',
        md: 'no-wrap',
        lg: 'no-wrap',
        xl: 'no-wrap',
        base: 'wrap',
      }}
    >
      <Link mr='5' fontSize='sm'>
        © {new Date().getFullYear().toString()} Meetup
      </Link>
      <Link mr='5' fontSize='sm'>
        Terms of Service
      </Link>
      <Link mr='5' fontSize='sm'>
        Privacy Policy
      </Link>
      <Link mr='5' fontSize='sm'>
        Cookie Policy
      </Link>
      <Link mr='5' fontSize='sm'>
        Help
      </Link>
    </Box>
  );
};

export default BottomLinks;
