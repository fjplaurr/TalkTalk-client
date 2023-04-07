/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextInput from './index';

export default {
  title: 'TextInput',
  component: TextInput,
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        {...args}
        {...register('email', {
          required: true,
          pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        })}
      />
      {errors.email?.type === 'pattern' && (
        <span>The pattern used for the email is not correct</span>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export const Default = Template.bind({});

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  labelTitle: 'Label Title',
};
