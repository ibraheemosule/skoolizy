import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { describe, it } from 'vitest';
import TestWrapper from '~components/reusables/TestWrapper';
import Announcements from '.';

const MockAnnouncements = () => (
  <TestWrapper>
    <Announcements />
  </TestWrapper>
);

beforeEach(() => render(<MockAnnouncements />));
afterEach(() => cleanup());

describe.skip('Announcements Page', () => {
  it('should render 3 announcements', async () => {
    expect(await screen.findAllByTestId('announcement')).toHaveLength(3);
  });

  it('should open the modal for the announcement detail when an announcement is clicked and close modal', async () => {
    const announcement = (await screen.findAllByTestId('announcement'))[0];

    await act(async () => userEvent.click(announcement));
    expect(await screen.findByTestId('announcement-modal')).toBeInTheDocument();
    expect(screen.getByText(/by mr tosin olawole/i)).toBeInTheDocument();
    expect(screen.getByText(/delete/i)).toBeInTheDocument();

    await act(async () => userEvent.click(screen.getByTestId('close-modal')));
    await waitFor(() =>
      expect(screen.queryByTestId('announcement-modal')).not.toBeInTheDocument()
    );
  });

  it('should render announcement content when an announcement is clicked', async () => {
    const announcement = (await screen.findAllByTestId('announcement'))[0];

    await act(async () => userEvent.click(announcement));

    expect(await screen.findByTestId('announcement-title')).toHaveTextContent(
      /loofor staffs ng/i
    );
    expect(await screen.findByTestId('announcement-modal')).toHaveTextContent(
      /here is anosdftherorking/i
    );
  });

  it('Should show delete button for multi_event', async () => {
    const announcement = (await screen.findAllByTestId('announcement'))[0];

    await act(async () => userEvent.click(announcement));

    expect(
      await screen.findByTestId('modal-action-button')
    ).toBeInTheDocument();
  });

  it('Should show delete button for single_event', async () => {
    const announcement = (await screen.findAllByTestId('announcement'))[1];

    await act(async () => userEvent.click(announcement));

    expect(
      await screen.findByTestId('modal-action-button')
    ).toBeInTheDocument();
  });

  it('Should hide delete button for memo', async () => {
    const announcement = (await screen.findAllByTestId('announcement'))[2];

    await act(async () => userEvent.click(announcement));
    expect(screen.queryByTestId('modal-action-button')).not.toBeInTheDocument();
  });

  // describe('Test announcement time', () => {
  //   beforeEach(() => {
  //     cleanup();
  //     vi.useFakeTimers();
  //     vi.setSystemTime(new Date('2024-06-04T09:43:03.000Z'));
  //     render(<MockAnnouncements />);
  //   });

  //   afterEach(() => vi.useRealTimers());

  //   it('should open the modal for the
  //  announcement detail when an announcement is clicked and close modal',
  //  () => {
  //     expect(screen.getAllByText('4/6/2024')).toHaveLength(5);
  //   });
  // });
});
