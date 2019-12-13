import React from 'react';
import { render } from '@testing-library/react';
import { CompOne } from './CompOne';

test('renders learn react link', () => {
  const { getByText } = render(<CompOne />);
  const linkElement = getByText(/3/i);
  expect(linkElement).toBeInTheDocument();
});
