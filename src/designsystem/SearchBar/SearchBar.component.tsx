import React from 'react';
import TextInput from '../TextInput';
import Box from '../Box';
import List from '../List';
import Themes from '../themes';

type ObjectWithId = { [key: string]: any; id: string };

type SearchBarProps = {
  elements: Array<ObjectWithId>;
  onInputChange: (value: string) => void;
  renderElement: (element: ObjectWithId) => JSX.Element;
};

const SearchBar = ({
  elements,
  onInputChange,
  renderElement,
}: SearchBarProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    gap={Themes.setSpace(4)}
  >
    <TextInput
      onChange={(event) => onInputChange(event.target.value)}
      type="text"
      name="searchBar"
      showSearchIcon
      placeholder="Placeholder"
      width="100%"
    />
    <Box
      borderRadius={`calc(${Themes.minimumBorderRadius} * 2)`}
      border={`1px solid ${Themes.colors.darkGray}`}
      width="75.6%"
    >
      <List elements={elements} renderElement={renderElement} />
    </Box>
  </Box>
);

export default SearchBar;
