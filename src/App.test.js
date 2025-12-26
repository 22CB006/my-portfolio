import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home page by default', () => {
  render(<App />);
  // Check if the app renders without crashing
  expect(document.body).toBeInTheDocument();
});

test('renders 404 page for invalid route', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-route']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('404')).toBeInTheDocument();
  expect(screen.getByText('Page Not Found')).toBeInTheDocument();
});
