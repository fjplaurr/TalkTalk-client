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
  pt: '8px',
  pr: '8px',
  pb: '8px',
  pl: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
