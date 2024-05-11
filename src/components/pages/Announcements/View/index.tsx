import { memo } from 'react';
import Modal from '~components/reusables/Modal';

type TViewAnnouncement = {
  view: string;
  closeModal: () => void;
};

const ViewAnnouncement = ({ view, closeModal }: TViewAnnouncement) => (
  <Modal
    size="md"
    title={
      <div className="flex flex-col gap-1">
        <h3>Examamination is starting next week monday</h3>
        <span className="text-gray-500 text-sm">By Mr Tosin olawole</span>
      </div>
    }
    content={
      <div>
        <p>
          Examamination is starting next week monday Examamination is starting
          next week monday Examamination is starting next week
          mondayExamamination is starting next week monday Examamination is
          starting next week monday{view} Examamination is starting next week
          monday Examamination is starting next week monday Examamination is
          starting next week mondayExamamination is starting next week monday
          Examamination is starting next week monday{view} Examamination is
          starting next week monday Examamination is starting next week monday
          Examamination is starting next week mondayExamamination is starting
          next week monday Examamination is starting next week monday{view}{' '}
          Examamination is starting next week monday Examamination is starting
          next week monday Examamination is starting next week
          mondayExamamination is starting next week monday Examamination is
          starting next week monday{view} Examamination is starting next week
          monday Examamination is starting next week monday Examamination is
          starting next week mondayExamamination is starting next week monday
          Examamination is starting next week monday{view} Examamination is
          starting next week monday Examamination is starting next week monday
          Examamination is starting next week mondayExamamination is starting
          next week monday Examamination is starting next week monday{view}{' '}
          Examamination is starting next week monday Examamination is starting
          next week monday Examamination is starting next week
          mondayExamamination is starting next week monday Examamination is
          starting next week monday{view} Examamination is starting next week
          monday Examamination is starting next week monday Examamination is
          starting next week mondayExamamination is starting next week monday
          Examamination is starting next week monday{view} Examamination is
          starting next week monday Examamination is starting next week monday
          Examamination is starting next week mondayExamamination is starting
          next week monday Examamination is starting next week monday{view}{' '}
          Examamination is starting next week monday Examamination is starting
          next week monday Examamination is starting next week
          mondayExamamination is starting next week monday Examamination is
          starting next week monday{view} Examamination is starting next week
          monday Examamination is starting next week monday Examamination is
          starting next week mondayExamamination is starting next week monday
          Examamination is starting next week monday{view} Examamination is
          starting next week monday Examamination is starting next week monday
          Examamination is starting next week mondayExamamination is starting
          next week monday Examamination is starting next week monday{view}{' '}
          Examamination is starting next week monday Examamination is starting
        </p>
      </div>
    }
    close={() => closeModal()}
    action={() => null}
    fixedActionBtn
    actionText="Delete"
  />
);

export default memo(ViewAnnouncement);
