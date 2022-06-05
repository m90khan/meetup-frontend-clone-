import { Badge, Box, Container } from '@chakra-ui/react';
import React from 'react';

const Pills = () => {
  return (
    <Container maxW='container.xl'>
      <Box
        direction='row'
        display='flex'
        flexWrap='wrap'
        justifyContent={{
          sm: 'flex-start',
          md: 'space-between',
          lg: 'space-between',
          xl: 'space-between',
          base: 'flex-start',
        }}
        my='10'
      >
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          textTransform='normal'
          color='#ffffff'
          bg='blue.100'
        >
          Boost your carrer
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Find your zen
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Get moving
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Share launguage + culture
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Read with friends
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Write together
        </Badge>
        <Badge
          borderRadius='3xl'
          px={4}
          py={2}
          mr='4'
          mb='4'
          color='#ffffff'
          textTransform='normal'
          bg='blue.100'
        >
          Hone your craft
        </Badge>
      </Box>
    </Container>
  );
};

export default Pills;
