import { it, describe } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TestWrapper from '~components/reusables/TestWrapper';
import Announcements from '.';

const MockAnnouncements = () => (
  <TestWrapper>
    <Announcements />
  </TestWrapper>
);

beforeEach(() => render(<MockAnnouncements />));
afterEach(() => cleanup());

describe('Announcements Page', () => {
  it('should render announcement page', async () => {
    expect(screen.getByTestId('announcements-page')).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getByText(/russia/i)).toBeInTheDocument()
    );
  });

  it('should render five announcements', () => {
    expect(screen.getAllByTestId('annoucement')).toHaveLength(5);
  });

  it('should open the modal for the announcement detail when an announcement is clicked and close modal', async () => {
    const announcement = screen.getAllByTestId('annoucement')[0];
    expect(screen.getAllByText('4/6/2024')).toHaveLength(5);

    userEvent.click(announcement);
    expect(await screen.findByTestId('announcement-modal')).toBeInTheDocument();
    expect(screen.getByText(/by mr tosin olawole/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();

    userEvent.click(screen.getByTestId('close-modal'));
    await waitFor(() =>
      expect(screen.queryByTestId('announcement-modal')).not.toBeInTheDocument()
    );
  });
});
