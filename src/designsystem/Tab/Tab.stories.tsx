import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab, TabList } from '.';

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
  <div style={{ width: '400px' }}>
    <TabList
      tabs={[
        { id: 'first', title: 'First tab' },
        { id: 'second', title: 'Second tab' },
      ]}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};
