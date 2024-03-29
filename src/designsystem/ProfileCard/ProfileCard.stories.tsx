/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProfileCard from './index';
import Box from '../Box';

const argTypes = {
  onInputChange: { action: 'typed' },
  onFollowClick: { action: 'clicked' },
};

export default {
  title: 'ProfileCard',
  component: ProfileCard,
  argTypes,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <Box>
    <ProfileCard {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  isFollowed: true,
  name: 'John',
  surname: 'Doe',
  pictureSrc: 'https://placedog.net/600',
  text: 'Loren impsum dolor sit amet dolor sit amet',
};
