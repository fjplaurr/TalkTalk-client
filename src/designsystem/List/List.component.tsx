import React from 'react';

type ObjectWithId = { [key: string]: any; id: string };

type ListProps = {
  elements: Array<ObjectWithId>;
  renderElement: (element: ObjectWithId) => JSX.Element;
};

const List = ({ elements, renderElement }: ListProps) => (
  <ul>
    {elements.map((element) => (
      <li key={element.id}>{renderElement(element)}</li>
    ))}
  </ul>
);

export default List;
