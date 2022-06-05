import {
  Badge,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Heading,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const SearchSection = () => {
  return (
    <Container maxW='container.xl' mt={20}>
      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(2, 1fr)',
          base: 'repeat(1, 1fr)',
        }}
        gap={6}
      >
        <Box>
          <Heading as='h3' size='lg' mb='7'>
            What do you want to do?
          </Heading>
          <Box
            display={'flex'}
            alignItems={'center'}
            flexDirection={{
              sm: 'column',
              md: 'row',
              lg: 'row',
              xl: 'row',
              base: 'row',
            }}
            w='100%'
          >
            <Box
              display={'flex'}
              flexBasis={{
                sm: '100%',
                md: '50%',
                lg: '50%',
                xl: '50%',
                base: '100%',
              }}
              w='100%'
              mr={{
                sm: '0',
                md: '2',
                lg: '2',
                xl: '2',
                base: '0',
              }}
            >
              <FormControl id='email'>
                <Box pos='relative'>
                  <Input
                    pl={'10'}
                    placeholder="Search for 'tennis'"
                    type='email'
                    w='100%'
                  />
                  <Box pos='absolute' top='3' left='2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 20 20'
                      fill='#c0c0c0'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Box>
                </Box>
              </FormControl>
            </Box>
            <Box
              flexBasis={{
                sm: '100%',
                md: '50%',
                lg: '50%',
                xl: '50%',
                base: '100%',
              }}
              w='100%'
              ml={{
                sm: '0',
                md: '2',
                lg: '2',
                xl: '2',
                base: '2',
              }}
              mt={{
                sm: '2',
                md: '0',
                lg: '0',
                xl: '0',
                base: '0',
              }}
            >
              <FormControl id='email'>
                <Box pos='relative'>
                  <Input
                    pl={'10'}
                    placeholder="Search for 'tennis'"
                    type='text'
                    w='100%'
                  />
                  <Box pos='absolute' top='3' left='2'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='18'
                      height='18'
                      viewBox='0 0 20 20'
                      fill='#c0c0c0'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Box>
                </Box>
              </FormControl>
            </Box>
          </Box>
          <Button
            _hover={{ opacity: '0.8' }}
            mt='5'
            pt='6'
            pb='6'
            w='100%'
            color='#ffffff'
            bg='red.200'
            fontSize='lg'
          >
            <Box fontWeight='black'>Search</Box>
          </Button>
        </Box>
        <Box>
          <Heading
            as='h3'
            size='lg'
            mb='7'
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            See what’s happening
          </Heading>
          <Box display='flex' flexWrap='wrap' justifyContent='flex-start'>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              Starting soon
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              Today
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              Tomorrow
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              This Week
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              Online
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              In person
            </Badge>
            <Badge
              borderRadius='3xl'
              px={5}
              py={2}
              mr='4'
              mb='4'
              color='#ffffff'
              textTransform='normal'
              bg='blue.100'
            >
              Trending near you
            </Badge>
          </Box>
        </Box>
      </Grid>
    </Container>
  );
};

export default SearchSection;
