import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.component';

test('renders learn react link', () => {
  render(<Home />);
  const text = screen.getByText('This is a template for React in Typescript');
  expect(text).toBeInTheDocument();
});
