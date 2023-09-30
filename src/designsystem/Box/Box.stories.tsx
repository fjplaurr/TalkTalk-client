import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './index';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Default = Template.bind({});
Default.args = {
  paddingTop: '8px',
  paddingRight: '8px',
  paddingBottom: '8px',
  paddingLeft: '8px',
};
