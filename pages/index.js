import { Box, Image } from '@chakra-ui/react';
import DownloadApp from '../components/UI/DownloadApp';
import Events from '../components/UI/Events';
import Footer from '../components/UI/Footer';
import Groups from '../components/UI/Groups';
import Hero from '../components/UI/Hero';
import Nav from '../components/UI/Nav';
import Pills from '../components/UI/Pills';
import Posts from '../components/UI/Posts';
import SearchSection from '../components/UI/SearchSection';
import Stories from '../components/UI/Stories';
import Works from '../components/UI/Works';

export default function Home() {
  return (
    <>
      <Box position='absolute' left='0' top='0' right='0'>
        <Nav />
        <Hero />
        <Posts />
        <Pills />
        <SearchSection />
        <Works />
        <Events />
        <Groups />
        <DownloadApp />
        <Stories />
        <Footer />
      </Box>
      <Box
        position='relative'
        top='0'
        bottom='0'
        right='0'
        left='0'
        height='100vh'
        zIndex={-1}
      >
        <Image w='80%' m='auto' objectFit='cover' sizes='300' src={'/assets/bg.svg'} />
      </Box>
    </>
  );
}
