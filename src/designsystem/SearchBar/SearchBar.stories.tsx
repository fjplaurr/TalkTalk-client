/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from './index';
import Box from '../Box';
import Text from '../Text';
import Avatar from '../Avatar';
import Button from '../Button';
import styles from './SearchBar.module.css';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  elements: [
    {
      id: '1',
      isFollowed: true,
      name: 'John',
      surname: 'Doe',
      pictureSrc: 'https://placedog.net/600',
      text: 'Loren impsum dolor sit amet',
    },
    {
      id: '5',
      isFollowed: false,
      name: 'Peter',
      surname: 'Jackson',
      pictureSrc: 'https://placedog.net/330',
      text: 'Loren impsum',
    },
    {
      id: '15',
      isFollowed: false,
      name: 'Andrew',
      surname: 'Mckey',
      pictureSrc: 'https://placedog.net/130',
      text: 'Loren impsum dolor sit Loren impsum dolor sit amet amet amet',
    },
  ],
  renderElement: (element) => (
    <Box
      display="flex"
      alignItems="center"
      noBorder
      pt="12px"
      pr="12px"
      pb="12px"
      pl="12px"
      width="100%"
      gap="16px"
    >
      <Avatar avatar={{ src: element.pictureSrc, name: element.name }} />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        noBorder
      >
        <Text fontWeight="bold">{`${element.name} ${element.surname}`}</Text>
        <Text fontWeight="regular" fontSize="small">
          {element.text}
        </Text>
      </Box>
      <div className={styles['button-wrapper']}>
        <Button
          width="98px"
          variant={element.isFollowed ? 'destructive' : 'secondary'}
          onClick={() => console.log(`Clicked row`)}
        >
          {element.isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </div>
    </Box>
  ),
};
