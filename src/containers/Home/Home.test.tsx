import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home, HomeProps } from './Home.component';
import { User } from '../../interfaces';
import { UserProvider } from '../../providers/UserProvider';
import { createMockUser, MOCK_ACCESS_TOKEN } from '../../__mocks__/utils';

const props: HomeProps = {
  postsWithAuthors: [],
  followingUsers: [],
  allUsers: [],
  createNewPost: jest.fn(),
  onFollowClick: jest.fn(),
  redirect: jest.fn(),
};

const user: User = createMockUser();

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

const renderWithLoggedInUser = (overridenProps: Partial<HomeProps> = {}) =>
  render(
    <UserProvider
      initialValue={{
        user,
        accessToken: MOCK_ACCESS_TOKEN,
        setUser: jest.fn(),
        setAccessToken: jest.fn(),
      }}
    >
      <Home {...props} {...overridenProps} />
    </UserProvider>,
  );

const renderWithNoUser = () =>
  render(
    <UserProvider>
      <Home {...props} />
    </UserProvider>,
  );

describe('Navbar', () => {
  test('Renders a Logo and a SearchBar', () => {
    renderWithNoUser();

    const logo = screen.getByTitle('TalkTalk logo');
    expect(logo).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search users');
    expect(searchBar).toBeInTheDocument();
  });

  test('Renders a common User Icon if the user is not logged in', () => {
    renderWithNoUser();

    // User Icon is rendered
    const userIcon = screen.getByTitle('User icon');
    expect(userIcon).toBeInTheDocument();

    // Avatar is not rendered
    const avatar = screen.queryByAltText(/Avatar of mockFirstName/);
    expect(avatar).not.toBeInTheDocument();
  });

  test('Renders a specific User Avatar if the user is logged in', () => {
    renderWithLoggedInUser();

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
    renderWithNoUser();

    const textArea = screen.getByPlaceholderText(
      'Click Login and start sending messages...',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a TextArea with a message if the user is logged in', () => {
    renderWithLoggedInUser();

    const textArea = screen.getByPlaceholderText(
      'Do you want to share something?',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a Login Button if the user is not logged in', () => {
    renderWithNoUser();

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('Renders a Send Button if the user is logged in', () => {
    renderWithLoggedInUser();

    const sendButton = screen.getByRole('button', { name: 'Send' });
    expect(sendButton).toBeInTheDocument();
  });
});

describe('For you tab', () => {
  test('Renders a PostCard for each post', () => {
    const overridenProps = {
      postsWithAuthors: mockPostsWithAuthors,
    };

    renderWithLoggedInUser(overridenProps);

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
  test('Renders a ProfileCard for each following user', async () => {
    const overridenProps = {
      followingUsers: [mockUser],
    };

    renderWithLoggedInUser(overridenProps);

    // click on Following
    const followingTab = screen.getByRole('button', { name: 'Following' });

    await waitFor(() => {
      userEvent.click(followingTab);
      const followingUserFullName = `${mockUser.firstName} ${mockUser.lastName}`;
      const followingUserStatus = `${mockUser.status}`;
      expect(screen.getByText(followingUserFullName)).toBeInTheDocument();
      expect(screen.getByText(followingUserStatus)).toBeInTheDocument();
    });
  });
});
