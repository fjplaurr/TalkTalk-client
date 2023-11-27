import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home.component';
import { User } from '../../interfaces';

const props = {
  user: undefined,
  setUser: jest.fn(),
  postsWithAuthors: [],
  followingUsers: [],
  allUsers: [],
  createNewPost: jest.fn(),
  onFollowClick: jest.fn(),
};

const user: User = {
  _id: 'mockId',
  firstName: 'mockFirstName',
  lastName: 'mockLastName',
  email: 'mockEmail',
  pictureSrc: 'mockPictureSrc',
  status: 'mockStatus',
  followingUsers: [],
  password: 'mockPassword',
};

describe('Navbar', () => {
  test('Renders a Logo and a SearchBar', () => {
    render(<Home {...props} />);

    // Logo
    const logo = screen.getByTitle('TalkTalk logo');
    expect(logo).toBeInTheDocument();

    // SearchBar
    const searchBar = screen.getByPlaceholderText('Search users');
    expect(searchBar).toBeInTheDocument();
  });

  test('Renders a common User Icon if the user is not logged in', () => {
    render(<Home {...props} />);

    // User Icon is rendered
    const userIcon = screen.getByTitle('User icon');
    expect(userIcon).toBeInTheDocument();

    // Avatar is not rendered
    const avatar = screen.queryByAltText(/Avatar of mockFirstName/);
    expect(avatar).not.toBeInTheDocument();
  });

  test('Renders a specific User Avatar if the user is logged in', () => {
    const overridenProps = {
      ...props,
      user,
    };

    render(<Home {...overridenProps} />);

    // User Icon is not rendered
    const userIcon = screen.queryByTitle('User icon');
    expect(userIcon).not.toBeInTheDocument();

    // Avatar is rendered
    const avatar = screen.getByAltText(/Avatar of mockFirstName/);
    expect(avatar).toBeInTheDocument();
  });
});



