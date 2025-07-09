import { User } from '../../interfaces';

const filterUsersBySearch = (users: User[], filter: string) => {
  if (filter === '') {
    return [];
  }

  const lowerCaseFilter = filter.toLowerCase();

  return users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();

    return (
      user.firstName.toLowerCase().includes(lowerCaseFilter) ||
      user.lastName.toLowerCase().includes(lowerCaseFilter) ||
      fullName.includes(lowerCaseFilter)
    );
  });
};

const mapUsersForSearchBar = (users: User[], currentUser?: User) =>
  users.map((user) => ({
    id: user._id,
    isFollowed: currentUser?.followingUsers.includes(user._id) ?? false,
    name: user.firstName,
    surname: user.lastName,
    pictureSrc: user.pictureSrc,
    text: user.status,
  }));

export { filterUsersBySearch, mapUsersForSearchBar };
