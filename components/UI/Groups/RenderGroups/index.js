import React from 'react';
import GroupItem from '../GroupItem';

const RenderGroups = () => {
  const data = [
    {
      image: 'https://via.placeholder.com/600/9c184f',
      groupHeader: "Southlands Woman's Social Group",
      groupDate: 'Mon, Aug 16 @ 10:45 PM',
      title: 'est quas voluptates dignissimos sint praesentium nisi recusandae',
    },
    {
      image: 'https://via.placeholder.com/600/56acb2',
      groupHeader: 'expedita rerum eaque',
      groupDate: 'Fri, Sep 10 @ 10:45 PM',
      title: 'praesentium fugit quis aut voluptatum commodi dolore corrupti  suit',
    },
    {
      image: 'https://via.placeholder.com/600/392537',
      groupHeader: 'asperiores nobis voluptate qui',
      groupDate: 'Sat, Aug 21 @ 10:45 PM',
      title:
        'facere non quis fuga fugit vitae sit asperiores est quos quis nisi veniam error',
    },
  ];
  return (
    <>
      {Array.from(data, (x) => (
        <GroupItem group={x} />
      ))}
    </>
  );
};

export default RenderGroups;
