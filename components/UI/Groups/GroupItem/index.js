import { Box, Divider, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const GroupItem = ({ group }) => {
  return (
    <Box border='1px' borderColor='gray.200' p='15px' width='100%' align='left'>
      <Box display='flex' alignItems='center'>
        <Image position='relative' w='50px' src={group.image} alt='brand' mr='15px' />
        <Heading alignItems='center' as='h6' fontweights='black' size='md'>
          {group.groupHeader}
        </Heading>
      </Box>
      <Divider my='3' mb='2' />
      <Box py='2' color='#877457' textTransform='uppercase' fontWeight='bold'>
        {group.groupDate}
      </Box>
      <Box fontWeight='bold' color='#212121'>
        {group.title}
      </Box>
    </Box>
  );
};

export default GroupItem;
