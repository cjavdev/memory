import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the header and a full deck', () => {
  const { getByText, container } = render(<App />);
  expect(getByText(/test your memory/i)).toBeInTheDocument();
  expect(container.querySelectorAll('.Card')).toHaveLength(26);
});
