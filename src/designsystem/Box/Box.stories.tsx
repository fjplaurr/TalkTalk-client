import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './index';
import Themes from '../themes';

const argTypes = {
  backgroundColor: {
    description: 'Sets the background color of the Box.',
    options: [...Object.keys(Themes.colors)],
    control: { type: 'select' },
  },
  onClick: { action: 'clicked' },
};

export default {
  title: 'Box',
  component: Box,
  argTypes,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args}>Box</Box>;

export const Default = Template.bind({});
Default.args = {
  $pt: Themes.setSpace(8),
  $pr: Themes.setSpace(8),
  $pb: Themes.setSpace(8),
  $pl: Themes.setSpace(8),
};
