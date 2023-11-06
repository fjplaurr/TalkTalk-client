/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './index';
import Themes from '../themes';

const argTypes = {
  fontSize: {
    description: 'Sets the font size of the text.',
    options: ['small', 'regular', 'large', 'extralarge'],
    control: { type: 'radio' },
  },
  fontWeight: {
    description: 'Sets the font weight of the text.',
    options: ['regular', 'semibold', 'bold'],
    control: { type: 'radio' },
  },
  color: {
    description: 'Sets the color of the text.',
    options: Object.keys(Themes.colors),
    control: { type: 'radio' },
  },
  $noOfLines: {
    description: 'Sets the number of lines of the text.',
    control: { type: 'number', min: 1, max: 5 },
  },
};

export default {
  title: 'Text',
  component: Text,
  argTypes,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Loren impsum sit Loren impsum dolor sit amet amet amet impsum dolor sit
    Loren impsum dolor sit amet amet ametimpsum dolor sit Loren impsum dolor sit
    amet amet ametimpsum dolor sit Loren impsum dolor sit amet amet ametimpsum
    dolor sit Loren impsum dolor sit amet amet amet
  </Text>
);

export const Default = Template.bind({});
Default.args = {
  as: 'p',
  fontSize: 'regular',
  fontWeight: 'regular',
};
