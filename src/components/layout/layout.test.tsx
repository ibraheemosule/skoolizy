// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@testing-library/jest-dom" />

import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';
import Layout from './Layout';

test('should toggle navbar class', async () => {
  render(<Layout />);

  const menuBtn = await screen.findByTestId('menu-btn');
  const navWrapper = await screen.findByTestId('nav-wrapper');

  menuBtn?.click();
  expect(navWrapper).toHaveClass('animate-in');
});
