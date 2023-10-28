// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Icons from './index';
import Box from '../Box';
import { Theme } from '..';

export const IconGallery = () => (
  <Box style={{ display: 'flex', gap: Theme.setSpace(8) }}>
    {Object.entries(Icons)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([iconName, IconComponent]) => (
        <IconComponent key={iconName} />
      ))}
  </Box>
);

export default {
  title: 'Icons',
  component: IconGallery,
} as ComponentMeta<typeof IconGallery>;
