/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostCard from './index';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'PostCard',
  component: PostCard,
  argTypes,
} as ComponentMeta<typeof PostCard>;

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: 'John',
    surname: 'Doe',
    pictureSrc: 'https://placedog.net/420',
  },
  post: {
    description:
      'Adipisicing nulla labore mollit cillum ullamco dolor amet consectetur aliquip aliqua in in exercitation deserunt. Ex anim laboris esse sint ipsum ad. Nulla pariatur eu deserunt cillum incididunt mollit amet Lorem. Qui sint do laboris in ex magna laborum. Eu sint velit non qui id fugiat qui pariatur cillum anim veniam laboris id. Consequat culpa nostrud irure ad sunt ipsum minim aliqua proident non consectetur tempor voluptate.',
  },
};
