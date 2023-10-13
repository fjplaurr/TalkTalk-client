import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login.component';

test('renders learn react link', () => {
  render(<Login />);
  const text = screen.getByText('This is a template for React in Typescript');
  expect(text).toBeInTheDocument();
});
