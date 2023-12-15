// __tests__/HeadNav.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeadNav from '../path-to-headnav-component';

test('renders HeadNav component with user', () => {
  render(<HeadNav isAuthenticated={true} user={{ username: 'testUser' }} />);
  expect(screen.getByText('testUser')).toBeInTheDocument();
});

test('renders HeadNav component without user', () => {
  render(<HeadNav isAuthenticated={false} />);
  expect(screen.getByRole('button', { name: 'Iniciar Sesión' })).toBeInTheDocument();
});
