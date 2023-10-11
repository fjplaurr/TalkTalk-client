import React from 'react';
import TextInput from '../TextInput';
import Box from '../Box';
import List from '../List';
import { setSpace } from '../themes';

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
    noBorder
    gap={setSpace(4)}
  >
    <TextInput
      width={setSpace(500)}
      onChange={(event) => onInputChange(event.target.value)}
      type="text"
      name="searchBar"
      showSearchIcon
      placeholder="Placeholder"
    />
    <Box width={setSpace(378)}>
      <List elements={elements} renderElement={renderElement} />
    </Box>
  </Box>
);

export default SearchBar;
