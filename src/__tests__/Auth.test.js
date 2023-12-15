// __tests__/auth.test.js
import useAuth from '../path-to-auth';
import { render, act, screen } from '@testing-library/react';

test('login and logout functions work as expected', async () => {
  let auth;

  render(<TestComponent ref={(instance) => (auth = instance)} />);

  await act(async () => {
    await auth.login('testUser', 'testPassword');
  });

  expect(auth.isAuthenticated).toBe(true);

  await act(async () => {
    await auth.logout();
  });

  expect(auth.isAuthenticated).toBe(false);
});
