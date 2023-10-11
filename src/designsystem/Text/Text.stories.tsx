/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Text from './index';
import { setSpace } from '../themes';

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
};

export default {
  title: 'Text',
  component: Text,
  argTypes,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <div style={{ width: setSpace(200) }}>
    <Text {...args}>
      Loren impsum sit Loren impsum dolor sit amet amet amet impsum dolor sit
      Loren impsum dolor sit amet amet ametimpsum dolor sit Loren impsum dolor
      sit amet amet ametimpsum dolor sit Loren impsum dolor sit amet amet
      ametimpsum dolor sit Loren impsum dolor sit amet amet amet
    </Text>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  as: 'p',
  fontSize: 'regular',
  fontWeight: 'regular',
};

export const Truncated = Template.bind({});
Truncated.args = {
  as: 'p',
  fontSize: 'regular',
  fontWeight: 'regular',
  noOfLines: 3,
};
