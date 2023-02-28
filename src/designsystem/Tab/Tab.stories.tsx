import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab, TabList } from '.';

const argTypes = {
  variant: {
    description: 'Sets the variant of the Tab.',
    options: ['default', 'selected'],
    control: { type: 'radio' },
  },
  onClick: { action: 'clicked' },
};

export default {
  title: 'Tab',
  component: Tab,
  argTypes,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
  <TabList
    tabs={[
      { id: 'first', title: 'first tab' },
      { id: 'second', title: 'second tab' },
    ]}
  />
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Selected = Template.bind({});
Selected.args = {
  variant: 'selected',
};
