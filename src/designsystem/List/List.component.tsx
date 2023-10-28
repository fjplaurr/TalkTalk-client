import React from 'react';
import styled from 'styled-components';

type ObjectWithId = { [key: string]: any; id: string };

type ListProps = {
  elements: Array<ObjectWithId>;
  renderElement: (element: ObjectWithId) => JSX.Element;
};

const StyledList = styled.ul`
  list-style-type: none;
`;

const List = ({ elements, renderElement }: ListProps) => (
  <StyledList>
    {elements.map((element) => (
      <li key={element.id}>{renderElement(element)}</li>
    ))}
  </StyledList>
);

export default List;
