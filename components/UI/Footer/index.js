import { Box, Container, Divider } from '@chakra-ui/react';
import BottomLinks from './BottomLinks';
import FooterContent from './FooterContent';
import Header from './Header';
import SocialIcons from './SocialIcons';

function Footer() {
  return (
    <Box mt={5} color='#ffffff' background='#212121' py='10'>
      <Container maxWidth='container.xl'>
        <Header />
        <Divider my='10' />
        <FooterContent />

        <SocialIcons />

        <BottomLinks />
      </Container>
    </Box>
  );
}

export default Footer;
