import React, { ChangeEvent, useState } from 'react';
import TextInput from '../TextInput';
import Box from '../Box';
import Popover from '../Popover';
import List from '../List';
import { ObjectWithId } from '../types';

type SearchBarProps<T> = {
  elements: Array<ObjectWithId<T>>;
  onInputChange?: (value: string) => void;
  renderElement: (element: ObjectWithId<T>) => JSX.Element;
  placeholder?: string;
};

const SearchBar = <T,>({
  elements,
  onInputChange,
  renderElement,
  placeholder,
}: SearchBarProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onInputChange?.(event.target.value);
  };

  React.useEffect(() => {
    setIsOpen(elements.length > 0);
  }, [elements]);

  const popoverContent = (
    <List elements={elements} renderElement={renderElement} />
  );

  const popoverTrigger = (
    <TextInput
      onChange={handleChange}
      type="text"
      name="searchBar"
      showSearchIcon
      placeholder={placeholder || ''}
      $width="100%"
    />
  );

  return (
    <Box $position="relative">
      <Popover
        popoverContent={popoverContent}
        isOpen={isOpen}
        popoverTrigger={popoverTrigger}
        setIsOpen={setIsOpen}
        $width="100%"
      />
    </Box>
  );
};

export default SearchBar;
