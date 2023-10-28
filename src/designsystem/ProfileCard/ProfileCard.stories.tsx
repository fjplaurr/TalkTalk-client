/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileCard from './index';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'ProfileCard',
  component: ProfileCard,
  argTypes,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    isFollowed: true,
    name: 'John',
    surname: 'Doe',
    pictureSrc: 'https://placedog.net/600',
    text: 'Loren impsum dolor sit amet',
    id: '1',
  },
};
