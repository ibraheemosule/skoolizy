import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { screen, render, waitFor } from '@testing-library/react';
import Layout from '.';

describe('testing the side nav animation', () => {
  let menuBtn: HTMLElement;
  let navWrapper: HTMLElement;

  beforeEach(async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    menuBtn = await screen.findByTestId('menu-btn');
    navWrapper = await screen.findByTestId('nav-wrapper');
  });

  test('should animate sidenav to the ui', async () => {
    userEvent.click(menuBtn);
    await waitFor(() => expect(navWrapper).toHaveClass('animate-in'));
  });

  test('Should animate sidenav out of the ui', async () => {
    userEvent.click(menuBtn);
    userEvent.click(navWrapper);

    expect(navWrapper).toHaveClass('animate-out');
  });
});
