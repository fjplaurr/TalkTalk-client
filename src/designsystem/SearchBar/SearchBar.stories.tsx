/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar from './index';
import ProfileCard from '../ProfileCard';
import Themes from '../themes';
import Box from '../Box';

const argTypes = {
  onInputChange: { action: 'typed' },
};

export default {
  title: 'SearchBar',
  component: SearchBar,
  argTypes,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => {
  const [searchBarFilter, setSearchBarFilter] = React.useState('');

  // filter elements using its firstName or lastName by searchBarFilter
  const lowerCaseSearchBarFilter = searchBarFilter.toLocaleLowerCase();
  const filteredSearchBarUsers = users.filter((u) => {
    const lowerCaseFirstName = u.name.toLocaleLowerCase();
    const lowerCaseLastName = u.surname.toLocaleLowerCase();

    if (lowerCaseSearchBarFilter === '') return false;

    return (
      lowerCaseFirstName.includes(lowerCaseSearchBarFilter) ||
      lowerCaseLastName.includes(lowerCaseSearchBarFilter) ||
      `${lowerCaseFirstName} ${lowerCaseLastName}`.includes(
        lowerCaseSearchBarFilter,
      )
    );
  });

  const usersForSearchBar = filteredSearchBarUsers.map((u) => ({
    id: u.id,
    isFollowed: true,
    name: u.name,
    surname: u.surname,
    pictureSrc: u.pictureSrc,
    text: u.text,
  }));

  return (
    <SearchBar
      elements={usersForSearchBar}
      renderElement={renderUser}
      onInputChange={(value) => setSearchBarFilter(value)}
      placeholder="Search users"
    />
  );
};

const renderUser = (user: Element) => (
  <Box $pt={Themes.setSpace(8)} $pb={Themes.setSpace(8)}>
    <ProfileCard
      isFollowed={user.isFollowed}
      name={user.name}
      pictureSrc={user.pictureSrc}
      surname={user.surname}
      text={user.text}
      onFollowClick={() => console.log('clicked')}
    />
  </Box>
);

type Element = {
  id: string;
  isFollowed: boolean;
  name: string;
  surname: string;
  pictureSrc: string;
  text: string;
};

const users: Element[] = [
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
  {
    id: '25',
    isFollowed: false,
    name: 'Andy',
    surname: 'Corey',
    pictureSrc: 'https://placedog.net/120',
    text: 'Loren impsum dolor sit Loren',
  },
];

export const Default = Template.bind({});
