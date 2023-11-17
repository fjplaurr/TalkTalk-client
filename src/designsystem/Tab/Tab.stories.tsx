import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tab, TabProvider } from '.';
import Themes from '../themes';
import Box from '../Box';

export default {
  title: 'Tab',
  component: Tab,
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = () => (
  <Box $width={Themes.setSpace(500)}>
    <TabProvider
      tabs={[
        {
          id: 'first',
          title: 'First tab',
          content: <h2>Content for the first tab</h2>,
        },
        {
          id: 'second',
          title: 'Second tab',
          content: (
            <div>
              <h2>Content for the second tab and a button below</h2>
              <h3>More content</h3>
            </div>
          ),
        },
      ]}
    />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  $variant: 'default',
};
