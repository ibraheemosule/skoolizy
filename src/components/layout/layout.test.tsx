import '@testing-library/jest-dom';

import { screen, render, act } from '@testing-library/react';
import Layout from './Layout';

describe('testing the side nav animation', () => {
  let menuBtn: HTMLElement;
  let navWrapper: HTMLElement;

  beforeEach(async () => {
    render(<Layout />);
    menuBtn = await screen.findByTestId('menu-btn');
    navWrapper = await screen.findByTestId('nav-wrapper');
  });

  test('should animate sidenav to the ui', async () => {
    await act(async () => menuBtn?.click());
    expect(navWrapper).toHaveClass('animate-in');
  });

  test('Should animate sidenav out of the ui', async () => {
    await act(async () => {
      menuBtn.click();
      navWrapper.click();
    });

    expect(navWrapper).toHaveClass('animate-out');
  });
});
