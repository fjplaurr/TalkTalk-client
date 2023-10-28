import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from './index';

export default {
  title: 'Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args}>Avatar</Avatar>
);

export const WithImage = Template.bind({});
WithImage.args = {
  avatar: {
    src: 'https://placedog.net/600',
    name: 'Dog Doggy',
  },
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {};
