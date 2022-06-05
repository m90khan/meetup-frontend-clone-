import { Box, Image, Container, Heading } from '@chakra-ui/react';

function DownloadApp() {
  return (
    <Box my='20'>
      <Container maxWidth='container.xl'>
        <Box
          display='flex'
          pos='relative'
          justify-content='space-between'
          alignItems='center'
        >
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image w='260px' src={'/assets/device-left.webp'}></Image>
          </Box>
          <Box pos='relative' mx='auto' align='center'>
            <Image w='80px' left='0' src={'/assets/meetup-logo.svg'}></Image>
            <Heading as='h6' size='md' my='7'>
              Stay connected. <br /> Download the app.
            </Heading>
            <Box display='flex'>
              <Image w='200px' p='5' src={'/assets/android-app-download.svg'}></Image>
              <Image w='200px' p='5' src={'/assets/ios-app-download.svg'}></Image>
            </Box>
          </Box>
          <Box
            display={{
              sm: 'none',
              md: 'block',
              lg: 'block',
              xl: 'block',
              base: 'none',
            }}
          >
            <Image w='260px' right='0' src={'/assets/device-right.webp'}></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default DownloadApp;
