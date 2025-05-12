import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  const { getByText } = render(<App />);
  const welcomeElement = getByText(/Bem-vindo ao Mini App do Telegram/i);
  expect(welcomeElement).toBeInTheDocument();
});
