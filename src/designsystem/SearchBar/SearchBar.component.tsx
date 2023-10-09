import React from 'react';
import styles from './SearchBar.module.css';
import TextInput from '../TextInput';
import Box from '../Box';
import Avatar from '../Avatar';
import Text from '../Text';
import Button from '../Button';

type SearchBarProps = {
  usersList: Array<{
    pictureSrc: string;
    name: string;
    surname: string;
    text: string;
    isFollowed: boolean;
    id: string;
  }>;
  onInputChange: (value: string) => void;
  onClickRow: (id: string) => void;
};

const SearchBar = ({
  usersList,
  onInputChange,
  onClickRow,
}: SearchBarProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    noBorder
    gap="4px"
  >
    <TextInput
      width="500px"
      onChange={(event) => onInputChange(event.target.value)}
      type="text"
      name="searchBar"
      showSearchIcon
      placeholder="Placeholder"
    />
    <Box width="378px">
      <ul className={styles.list}>
        {usersList.map((user) => (
          <li key={user.id} className={styles['list-item']}>
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
              <div className={styles['button-wrapper']}>
                <Button
                  width="98px"
                  variant={user.isFollowed ? 'destructive' : 'secondary'}
                  onClick={() => onClickRow(user.id)}
                >
                  {user.isFollowed ? 'Unfollow' : 'Follow'}
                </Button>
              </div>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  </Box>
);

export default SearchBar;
