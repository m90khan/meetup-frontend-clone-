import React from 'react';
import RenderStory from '../RenderStory';

const RenderStories = () => {
  const data = [
    {
      image: '/assets/story-one.jpg',
      title: 'Three Ways To Make Coworker Friendships While Working From Home',
      description:
        'Work friendships don’t need to fade just because you’re working remotely. Here are three fun ways you can get to know your colleagues.',
    },
    {
      image: '/assets/story-two.jpg',
      title: 'Five Ways to Feel More Connected',
      description:
        ' Since Meetup began nearly 20 years ago, we’ve fostered connections between more than 50 million people in 190 countries worldwide. Here are five simple strategies to help you feel more connected and improve your wellbeing.',
    },
    {
      image: '/assets/story-three.jpg',
      title: 'How To Live Your Best Social Life',
      description:
        'Social interaction is a key part of any healthy lifestyle. Discover all different kinds of events that’ll help you maintain a fun and fulfilling social life.',
    },
  ];
  return (
    <>
      {Array.from(data, (x) => (
        <RenderStory story={x} />
      ))}
    </>
  );
};

export default RenderStories;
