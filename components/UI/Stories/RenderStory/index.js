import { Box, Heading, Image, Link } from '@chakra-ui/react';
import React from 'react';

const RenderStory = ({ story }) => {
  return (
    <Box width='100%' align='left'>
      <Link>
        <Image
          position='relative'
          src={story.image}
          _hover={{ opacity: '0.8' }}
          alt='brand'
          mr='15px'
          width='100%'
        />
        <Box d='flex' flexDirection='column'>
          <Heading
            alignItems='center'
            as='h6'
            fontweights='black'
            size='md'
            pt='4'
            pb='4'
          >
            {story.title}
          </Heading>
        </Box>
      </Link>

      <Box>{story.description}</Box>
    </Box>
  );
};

export default RenderStory;
