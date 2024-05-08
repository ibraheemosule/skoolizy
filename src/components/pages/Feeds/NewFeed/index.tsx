import { memo } from 'react';
import { ActionBtn } from '~reusables/ui/Buttons';
import Modal from '~reusables/Modal';

const NewFeed = ({ closeModal }: { closeModal: () => void }) => (
  <Modal
    size="md"
    title="New Feed"
    content={
      <div className="pb-8">
        <textarea
          placeholder="Share your thoughts..."
          className="w-full outline-none resize-none h-20 bg-gray-100 p-2 rounded-lg"
          maxLength={200}
        />
        <div className="flex mt-4 gap-4 flex-wrap sm:justify-end">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="cursor-pointer" />{' '}
            <label>Anonymous</label>
          </div>
          <ActionBtn className="px-4 py-2 text-purple.dark hover:opacity-50">
            Request
          </ActionBtn>
        </div>
      </div>
    }
    close={() => closeModal()}
  />
);

export default memo(NewFeed);
