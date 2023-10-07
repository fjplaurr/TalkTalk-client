import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import PostSender from './index';

const argTypes = {
  onSend: { action: 'clicked' },
  onChange: { action: 'typed' },
};

export default {
  title: 'PostSender',
  component: PostSender,
  argTypes,
} as ComponentMeta<typeof PostSender>;

const Template: ComponentStory<typeof PostSender> = (args) => (
  <PostSender {...args}>PostSender</PostSender>
);

export const Default = Template.bind({});
Default.args = {};
