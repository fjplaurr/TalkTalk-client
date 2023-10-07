import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './index';

const argTypes = {
  onSend: { action: 'clicked' },
  onChange: { action: 'typed' },
};

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => (
  <TextArea {...args}>TextArea</TextArea>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
