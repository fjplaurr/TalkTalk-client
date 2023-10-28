import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

const argTypes = {
  variant: {
    description: 'Sets the variant of the button.',
    options: ['primary', 'secondary', 'destructive'],
    control: { type: 'radio' },
  },
  onClick: { action: 'clicked' },
};

export default {
  title: 'Button',
  component: Button,
  argTypes,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  width: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  width: '',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  width: '',
};
