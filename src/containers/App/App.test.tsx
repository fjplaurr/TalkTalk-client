import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText('This is a template for React in Typescript');
  expect(text).toBeInTheDocument();
});
