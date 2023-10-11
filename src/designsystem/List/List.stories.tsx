/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import List from './index';
import Box from '../Box';
import Text from '../Text';
import Avatar from '../Avatar';
import { setSpace } from '../themes';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'List',
  component: List,
  argTypes,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const users = [
  {
    id: '1',
    name: 'John',
    surname: 'Doe',
    pictureSrc: 'https://placedog.net/600',
    text: 'Loren impsum dolor sit amet',
  },
  {
    id: '5',
    name: 'Peter',
    surname: 'Jackson',
    pictureSrc: 'https://placedog.net/330',
    text: 'Loren impsum',
  },
  {
    id: '15',
    name: 'Andrew',
    surname: 'Mckey',
    pictureSrc: 'https://placedog.net/130',
    text: 'Loren impsum dolor sit Loren impsum dolor sit amet amet amet',
  },
];

const renderUser = (user: Record<string, string>) => (
  <Box
    display="flex"
    alignItems="center"
    noBorder
    pt={setSpace(12)}
    pr={setSpace(12)}
    pb={setSpace(12)}
    pl={setSpace(12)}
    width="100%"
    gap={setSpace(16)}
  >
    <Avatar avatar={{ src: user.pictureSrc, name: user.name }} />
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      noBorder
    >
      <Text fontWeight="bold">{`${user.name} ${user.surname}`}</Text>
      <Text fontWeight="regular" fontSize="small">
        {user.text}
      </Text>
    </Box>
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  elements: users,
  renderElement: renderUser,
};
