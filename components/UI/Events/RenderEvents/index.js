import React from 'react';
import EventItem from '../EventItem';

const RenderEvents = () => {
  const data = [
    {
      image: '/assets/upcomming-one.png',
      eventHeader: 'Online Event',
      eventDate: 'Sat, Aug 14 @ 9:45 PM NPT',
      title: 'Upcoming online events',
      group: 'Remote-Working Group',
      users: [
        { src: 'https://via.placeholder.com/150/771796', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/24f355', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/56a8c2', name: 'Kumaru usman' },
      ],
      totalUsers: 134,
    },
    {
      image: '/assets/upcomming-two.jpg',
      eventHeader: 'Online Event',
      eventDate: 'Fri, Sep 10 @ 10:45 PM NPT',
      title: 'Frontend Developers Summit',
      group: 'FrontEnd Group',
      users: [
        { src: 'https://via.placeholder.com/150/24f355', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/771796', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/56a8c2', name: 'Kumaru usman' },
      ],
      totalUsers: 204,
    },
    {
      image: '/assets/upcomming-three.jpg',
      eventHeader: 'Online Event',
      eventDate: 'Sat, Aug 21 @ 10:45 PM NPT',
      title: 'Noah cooking choas',
      group: 'Cooking Group',
      users: [
        { src: 'https://via.placeholder.com/150/24f355', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/56a8c2', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/771796', name: 'Kumaru usman' },
      ],
      totalUsers: 26,
    },
    {
      image: '/assets/upcomming-four.jpg',
      eventHeader: 'Online Event',
      eventDate: 'Sat, Aug 14 @ 9:45 PM NPT',
      title: 'Startup weekend',
      group: 'Startup-Event Group',
      users: [
        { src: 'https://via.placeholder.com/150/771796', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/56a8c2', name: 'Kumaru usman' },
        { src: 'https://via.placeholder.com/150/24f355', name: 'Kumaru usman' },
      ],
      totalUsers: 10,
    },
  ];
  return (
    <>
      {Array.from(data, (x, i) => (
        <EventItem event={x} key={i} />
      ))}
    </>
  );
};

export default RenderEvents;
