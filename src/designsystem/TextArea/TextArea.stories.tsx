import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextArea from './index';

const argTypes = {
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
  resize: 'vertical',
};

export const WithSubmitButton = Template.bind({});
WithSubmitButton.args = {
  placeholder: 'Placeholder',
  onSend: () => console.log('submitted'),
  resize: 'vertical',
  buttonText: 'Send',
};
