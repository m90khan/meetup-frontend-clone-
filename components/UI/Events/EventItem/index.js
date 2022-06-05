import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

const EventItem = ({ event }) => {
  return (
    <Box width='100%' align='left'>
      <Box position='relative'>
        <Image position='relative' w='100%' src={event.image} alt='brand' />
        <Box
          position='absolute'
          display='flex'
          alignItems='center'
          borderRadius='5px'
          top='0'
          background='#ffffff'
          fontSize='sm'
          m='2'
          px='3'
          py='1'
        >
          <svg
            data-swarm-icon='true'
            width='18'
            height='18'
            fill='#757575'
            ml='4'
            d='block'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z'></path>
          </svg>
          <Box ml='2' color='#757575' fontWeight='semibold'>
            {event.eventHeader}
          </Box>
        </Box>
      </Box>
      <Box mt='3' color='#877457' fontWeight='semibold'>
        {event.eventDate}
      </Box>
      <Heading alignItems='center' as='h6' mt='1' fontweights='black' size='sm'>
        {event.title}
      </Heading>
      <Box my='3' size='xs'>
        {event.group}
      </Box>
      <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          {event &&
            event.users &&
            event.users.map((user) => (
              <Image
                borderRadius='full'
                border='1px'
                borderColor='gray.200'
                boxSize='35px'
                mr='-8px'
                src={user.src}
                alt={user.name}
              />
            ))}

          <Box ml='16px' color='#757575'>
            {event.totalUsers}
          </Box>
        </Box>
        <Box>
          <svg data-swarm-icon='true' height='18' width='18' viewBox='0 0 18 18'>
            <path d='M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z'></path>
          </svg>
        </Box>
      </Box>
    </Box>
  );
};

export default EventItem;
