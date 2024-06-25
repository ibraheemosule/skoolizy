import { FC, memo, useRef, ElementRef, useState } from 'react';
import { ActionBtn, BaseBtn } from '~components/reusables/ui/Buttons';
import CancelIcon from '~src/assets/Icons/CancelIcon';
import SkeletonLoader from '../SkeletonLoader';
import { isFuncPromise } from '~utils/index';
import popup from '~utils/popup';
import { TError, TModal } from './t-modal';
import { sizes } from './u-modal';

const Modal: FC<TModal> = ({
  close,
  action,
  title,
  content,
  actionText,
  size,
  scroll = true,
  fixedActionBtn = false,
  isLoading = false,
  btnClass,
}) => {
  const modal = useRef<ElementRef<'div'>>(null);
  const [loading, setLoading] = useState(false);

  const modalAction = async () => {
    let res: unknown;
    if (action && isFuncPromise(action)) {
      setLoading(true);
      try {
        res = await action();
        if (res) popup('success', (res as { message: string }).message);
      } catch (e: unknown) {
        const err = e as TError;
        popup('error', err?.response?.data?.error || err.message);
      } finally {
        setLoading(false);
      }
    } else action?.();
    if (res) close((prev) => !prev);
  };

  const actionUI = (
    <div className="mt-4 shrink-0 w-full">
      <ActionBtn
        testId="modal-action-button"
        className={btnClass}
        loading={loading}
        onClick={modalAction}
      >
        {actionText || 'Submit'}
      </ActionBtn>
    </div>
  );

  return (
    <div
      ref={modal}
      onClick={(e) => e.target === modal.current && close((prev) => !prev)}
      className="fixed text-left transition-all flex justify-center md:items-center bg-[#a4a3a3d3] top-0 left-0 h-screen w-screen z-50 p-8"
    >
      <div
        className={`min-w-[100%] transition-all relative flex flex-col h-fit max-h-[80vh] sm:max-h-[90vh] ${
          sizes[size || 'lg']
        } bg-white shadow-sm p-6 rounded-md`}
      >
        <div className="absolute top-4 right-4">
          <BaseBtn testId="close-modal" onClick={() => close((prev) => !prev)}>
            <CancelIcon height={25} width={25} />
          </BaseBtn>
        </div>
        {isLoading ? (
          <div className="mt-8">
            <SkeletonLoader type="text" />
          </div>
        ) : (
          <>
            <header className="shrink-0">
              <h3 className=" text-xl font-semibold max-w-[90%]">{title}</h3>
            </header>
            <main className={`grow my-6 ${scroll ? 'overflow-y-auto' : ''}`}>
              {content}
              {action && !fixedActionBtn && actionUI}
            </main>
            {action && fixedActionBtn && actionUI}
          </>
        )}
      </div>
    </div>
  );
};

export default memo(Modal);
