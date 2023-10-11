import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './index';
import { setSpace } from '../themes';

export default {
  title: 'Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Default = Template.bind({});
Default.args = {
  pt: setSpace(8),
  pr: setSpace(8),
  pb: setSpace(8),
  pl: setSpace(8),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
