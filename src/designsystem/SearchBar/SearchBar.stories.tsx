/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from './index';
import PostCard from '../../components/PostCard';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

type User = {
  pictureSrc: string;
  name: string;
  surname: string;
  text: string;
  id: string;
};

type ObjectWithId = { [key: string]: any; id: string };

const renderUser = (user: User) => <PostCard user={user} />;

const users = [
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
Default.args = {
  elements: users,
  renderElement: renderUser as (obj: ObjectWithId) => JSX.Element,
};
