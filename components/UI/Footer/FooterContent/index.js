import React from 'react';
import { Box, Heading, List, ListItem, Link } from '@chakra-ui/react';
const FooterContent = () => {
  return (
    <Box
      display='flex'
      flexDirection={{
        sm: 'column',
        md: 'row',
        lg: 'row',
        xl: 'row',
        base: 'column',
      }}
      alignItems='top'
    >
      <Box
        flex='1'
        mb={{
          sm: '10',
          md: '0',
          lg: '0',
          xl: '0',
          base: '4',
        }}
      >
        <Heading size='sm'>Your Account</Heading>
        <List mt='4' spacing={2}>
          <ListItem>
            <Link color='#A2A2A2'>Sign up</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Log in</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Help</Link>
          </ListItem>
        </List>
      </Box>

      <Box
        flex='1'
        mb={{
          sm: '10',
          md: '0',
          lg: '0',
          xl: '0',
          base: '4',
        }}
      >
        <Heading size='sm'>Discover</Heading>
        <List mt='4' spacing={2}>
          <ListItem>
            <Link color='#A2A2A2'>Groups</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Calendar</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Topics</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Cities</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Online Events</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Local Guides</Link>
          </ListItem>
        </List>
      </Box>

      <Box
        flex='1'
        mb={{
          sm: '10',
          md: '0',
          lg: '0',
          xl: '0',
          base: '4',
        }}
      >
        <Heading size='sm'>Your Account</Heading>
        <List mt='4' spacing={2}>
          <ListItem>
            <Link color='#A2A2A2'>Sign up</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Log in</Link>
          </ListItem>
          <ListItem>
            <Link color='#A2A2A2'>Help</Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default FooterContent;
