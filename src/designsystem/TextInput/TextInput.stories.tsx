import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput from './index';

const argTypes = {
  // variant: {
  //   description: 'Sets the variant of the button.',
  //   options: ['primary', 'secondary', 'destructive'],
  //   control: { type: 'radio' },
  // },
};

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => {
  const [inputTextState, setInputTextState] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputTextState(event.target.value);
  };

  return (
    <div>
      <TextInput
        {...args}
        value={inputTextState}
        onChange={handleChange}
        type="text"
      />
    </div>
  );
};

export const Default = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  labelTitle: 'Label',
};
