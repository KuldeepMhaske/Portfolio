import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kuldeep Jagdeo Mhaske name on homepage', () => {
  render(<App />);
  const nameElement = screen.getByText(/Kuldeep Jagdeo Mhaske/i);
  expect(nameElement).toBeInTheDocument();
});
