/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from './index';
import ProfileCard from '../ProfileCard';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => (
  <SearchBar elements={users} renderElement={renderUser} />
);

const renderUser = (user: Element) => (
  <ProfileCard
    isFollowed={user.isFollowed}
    name={user.name}
    pictureSrc={user.pictureSrc}
    surname={user.surname}
    text={user.text}
  />
);

type Element = {
  id: string;
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
};

const users: Element[] = [
  {
    id: '1',
    isFollowed: true,
    name: 'John',
    surname: 'Doe',
    pictureSrc: 'https://placedog.net/600',
    text: 'Loren impsum dolor sit amet',
  },
  {
    id: '5',
    isFollowed: false,
    name: 'Peter',
    surname: 'Jackson',
    pictureSrc: 'https://placedog.net/330',
    text: 'Loren impsum',
  },
  {
    id: '15',
    isFollowed: false,
    name: 'Andrew',
    surname: 'Mckey',
    pictureSrc: 'https://placedog.net/130',
    text: 'Loren impsum dolor sit Loren impsum dolor sit amet amet amet',
  },
];

export const Default = Template.bind({});
