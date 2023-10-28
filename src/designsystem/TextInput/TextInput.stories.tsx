/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextInput from './index';
import Themes from '../themes';

const argTypes = {
  type: {
    description: 'Sets the type of the input.',
    options: ['email', 'password', 'text'],
    control: { type: 'radio' },
  },
};

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes,
} as ComponentMeta<typeof TextInput>;

type Inputs = {
  someText: string;
  email: string;
};

const Template: ComponentStory<typeof TextInput> = (args) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // eslint-disable-next-line no-console
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const registerOutput = register('email', {
    required: true,
    pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...registerOutput}
        errorMessage={
          errors.email?.type === 'pattern'
            ? 'The pattern used for the email is not correct'
            : undefined
        }
        {...args}
      />
      <div style={{ marginTop: Themes.setSpace(8) }}>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  type: 'email',
  showSearchIcon: false,
  errorMessage: '',
  width: '',
};
