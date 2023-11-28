import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Home, HomeProps } from './Home.component';
import { User } from '../../interfaces';

const props: HomeProps = {
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
  followingUsers: ['mockId2'],
  password: 'mockPassword',
};

const mockUser: User = {
  _id: 'mockId2',
  firstName: 'mockFirstName2',
  lastName: 'mockLastName2',
  email: 'mockEmail2',
  pictureSrc: 'mockPictureSrc2',
  status: 'mockStatus2',
  followingUsers: [],
  password: 'mockPassword2',
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

describe('TextArea to write posts', () => {
  test('Renders a TextArea with a message if the user is not logged in', () => {
    render(<Home {...props} />);

    const textArea = screen.getByPlaceholderText(
      'Click Login and start sending messages...',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a TextArea with a message if the user is logged in', () => {
    const overridenProps = {
      ...props,
      user,
    };

    render(<Home {...overridenProps} />);

    const textArea = screen.getByPlaceholderText(
      'Do you want to share something?',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a Login Button if the user is not logged in', () => {
    render(<Home {...props} />);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('Renders a Send Button if the user is logged in', () => {
    const overridenProps = {
      ...props,
      user,
    };

    render(<Home {...overridenProps} />);

    const sendButton = screen.getByRole('button', { name: 'Send' });
    expect(sendButton).toBeInTheDocument();
  });
});

const mockPostsWithAuthors = [
  {
    post: {
      _id: 'mockId',
      text: 'mockText',
      authorId: 'mockAuthorId',
      date: new Date(),
    },
    author: user,
  },
  {
    post: {
      _id: 'mockId2',
      text: 'mockText2',
      authorId: 'mockAuthorId2',
      date: new Date(),
    },
    author: mockUser,
  },
];

describe('For you tab', () => {
  test('Renders a PostCard for each post', () => {
    const overridenProps = {
      ...props,
      user,
      postsWithAuthors: mockPostsWithAuthors,
    };

    render(<Home {...overridenProps} />);

    // first author with their post
    const firstAuthorFullName = `${mockPostsWithAuthors[0].author.firstName} ${mockPostsWithAuthors[0].author.lastName}`;
    const firstAuthorPost = `${mockPostsWithAuthors[0].post.text}`;
    expect(screen.getByText(firstAuthorFullName)).toBeInTheDocument();
    expect(screen.getByText(firstAuthorPost)).toBeInTheDocument();

    // second author with their post
    const secondAuthorFullName = `${mockPostsWithAuthors[1].author.firstName} ${mockPostsWithAuthors[1].author.lastName}`;
    const secondAuthorPost = `${mockPostsWithAuthors[1].post.text}`;
    expect(screen.getByText(secondAuthorFullName)).toBeInTheDocument();
    expect(screen.getByText(secondAuthorPost)).toBeInTheDocument();
  });
});

describe('Following tab', () => {
  test('Renders a ProfileCard for each following user', () => {
    const overridenProps = {
      ...props,
      user,
      followingUsers: [mockUser],
    };

    render(<Home {...overridenProps} />);

    // click on Following
    const followingTab = screen.getByRole('button', { name: 'Following' });
    act(() => {
      followingTab.click();
    });

    // following user
    const followingUserFullName = `${mockUser.firstName} ${mockUser.lastName}`;
    const followingUserStatus = `${mockUser.status}`;
    expect(screen.getByText(followingUserFullName)).toBeInTheDocument();
    expect(screen.getByText(followingUserStatus)).toBeInTheDocument();
  });
});
