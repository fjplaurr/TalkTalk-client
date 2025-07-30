import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import { Post, User } from '../../interfaces';
import { UserProvider } from '../../providers/UserProvider';
import { createMockUser, MOCK_ACCESS_TOKEN } from '../../__mocks__/utils';
import Home from './Home.component';
import { getSingle, getAll as getAllUsers } from '../../endpoints/user';
import { getAll as getAllPosts } from '../../endpoints/post';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../endpoints/post', () => ({
  create: jest.fn(),
  getAll: jest.fn(),
}));

jest.mock('../../endpoints/user', () => ({
  getSingle: jest.fn(),
  getAll: jest.fn(),
  update: jest.fn(),
}));

const AUTHOR_ID_1 = 'mockAuthorId1';
const AUTHOR_ID_2 = 'mockAuthorId2';

const primaryUser: User = createMockUser({
  _id: AUTHOR_ID_1,
  followingUsers: [AUTHOR_ID_2],
});

const secondaryUser: User = {
  _id: AUTHOR_ID_2,
  firstName: 'mockFirstName2',
  lastName: 'mockLastName2',
  email: 'mockEmail2',
  pictureSrc: 'mockPictureSrc2',
  status: 'mockStatus2',
  followingUsers: [],
  password: 'mockPassword2',
};

const posts: Post[] = [
  {
    _id: 'mockId1',
    text: 'mockText1',
    authorId: AUTHOR_ID_1,
    date: new Date(),
  },
  {
    _id: 'mockId2',
    text: 'mockText2',
    authorId: AUTHOR_ID_2,
    date: new Date(),
  },
];

const users: User[] = [primaryUser, secondaryUser];

beforeEach(() => {
  (getAllPosts as jest.Mock).mockResolvedValue(posts);

  (getSingle as jest.Mock).mockImplementation((authorId: Post['authorId']) =>
    Promise.resolve(users.find((item) => item._id === authorId)),
  );

  (getAllUsers as jest.Mock).mockResolvedValue(users);
});

const renderHome = (user?: User) =>
  render(
    <MemoryRouter>
      <UserProvider
        initialValue={
          user
            ? {
                user,
                accessToken: MOCK_ACCESS_TOKEN,
                setUser: jest.fn(),
                setAccessToken: jest.fn(),
              }
            : undefined
        }
      >
        <Home />
      </UserProvider>
    </MemoryRouter>,
  );

const renderWithLoggedInUser = () => renderHome(primaryUser);
const renderWithNoUser = () => renderHome();

describe('Navbar', () => {
  test('Renders a Logo and a SearchBar', async () => {
    await act(async () => {
      renderWithNoUser();
    });

    const logo = screen.getByTitle('TalkTalk logo');
    expect(logo).toBeInTheDocument();

    const searchBar = screen.getByPlaceholderText('Search users');
    expect(searchBar).toBeInTheDocument();
  });

  test('Renders a common User Icon if the user is not logged in', async () => {
    await act(async () => {
      renderWithNoUser();
    });

    const userIcon = screen.getByTitle('User icon');
    expect(userIcon).toBeInTheDocument();

    const avatar = screen.queryByAltText(/Avatar of mockFirstName/);
    expect(avatar).not.toBeInTheDocument();
  });
});

describe('TextArea to write posts', () => {
  test('Renders a TextArea with a message if the user is not logged in', async () => {
    await act(async () => {
      renderWithNoUser();
    });

    const textArea = screen.getByPlaceholderText(
      'Click Login and start sending messages...',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a TextArea with a message if the user is logged in', async () => {
    await act(async () => {
      renderWithLoggedInUser();
    });

    const textArea = screen.getByPlaceholderText(
      'Do you want to share something?',
    );

    expect(textArea).toBeInTheDocument();
  });

  test('Renders a Login Button if the user is not logged in', async () => {
    await act(async () => {
      renderWithNoUser();
    });

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  test('Renders a Send Button if the user is logged in', async () => {
    await act(async () => {
      renderWithLoggedInUser();
    });

    const sendButton = screen.getByRole('button', { name: 'Send' });
    expect(sendButton).toBeInTheDocument();
  });
});

describe('For you tab', () => {
  test('Renders a PostCard for each post', async () => {
    await act(async () => {
      renderWithLoggedInUser();
    });

    // me and with my post
    const firstAuthorFullName = `${users[0].firstName} ${users[0].lastName}`;
    const firstAuthorPost = `${posts[0].text}`;
    expect(screen.getByText(firstAuthorFullName)).toBeInTheDocument();
    expect(screen.getByText(firstAuthorPost)).toBeInTheDocument();

    // followed author with their post
    const secondAuthorFullName = `${users[1].firstName} ${users[1].lastName}`;
    const secondAuthorPost = `${posts[1].text}`;
    expect(screen.getByText(secondAuthorFullName)).toBeInTheDocument();
    expect(screen.getByText(secondAuthorPost)).toBeInTheDocument();
  });
});

describe('Following tab', () => {
  test('Renders a ProfileCard for each following user', async () => {
    await act(async () => {
      renderWithLoggedInUser();
    });

    const followingTab = screen.getByRole('button', { name: 'Following' });

    await act(async () => {
      userEvent.click(followingTab);
    });

    const followingUserFullName = `${secondaryUser.firstName} ${secondaryUser.lastName}`;
    const followingUserStatus = `${secondaryUser.status}`;
    expect(screen.getByText(followingUserFullName)).toBeInTheDocument();
    expect(screen.getByText(followingUserStatus)).toBeInTheDocument();
  });
});
