import React from 'react';
import styled from 'styled-components';
import { ObjectWithId } from '../types';

type ListProps<T> = {
  elements: ObjectWithId<T>[];
  renderElement: (element: ObjectWithId<T>) => React.ReactNode;
};

const StyledList = styled.ul`
  list-style-type: none;
`;

const List = <T,>({ elements, renderElement }: ListProps<T>) => (
  <StyledList>
    {elements.map((element) => (
      <li key={element.id}>{renderElement(element)}</li>
    ))}
  </StyledList>
);

export default List;
