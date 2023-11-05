import React, { ChangeEvent, useState } from 'react';
import TextInput from '../TextInput';
import Box from '../Box';
import List from '../List';
import Themes from '../themes';
import { ObjectWithId } from '../types';

type SearchBarProps<T> = {
  elements: Array<ObjectWithId<T>>;
  onInputChange?: (value: string) => void;
  renderElement: (element: ObjectWithId<T>) => JSX.Element;
};

const SearchBar = <T,>({
  elements,
  onInputChange,
  renderElement,
}: SearchBarProps<T>) => {
  const [expand, setExpand] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setExpand(event.target.value !== '');
    onInputChange?.(event.target.value);
  };

  return (
    <Box
      $display="flex"
      $flexDirection="column"
      $alignItems="center"
      $justifyContent="center"
      $gap={Themes.setSpace(4)}
    >
      <TextInput
        onChange={handleChange}
        type="text"
        name="searchBar"
        showSearchIcon
        placeholder="Placeholder"
        $width="100%"
      />
      {expand && (
        <Box
          $borderRadius={`calc(${Themes.minimumBorderRadius} * 2)`}
          $border={`1px solid ${Themes.colors.darkGray}`}
          $width="75.6%"
        >
          <List elements={elements} renderElement={renderElement} />
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
