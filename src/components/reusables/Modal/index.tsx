import { FC, memo, useState } from 'react';
import { ActionBtn, BaseBtn } from '~components/reusables/ui/Buttons';
import CancelIcon from '~src/assets/Icons/CancelIcon';
import SkeletonLoader from '../SkeletonLoader';
import { isFuncPromise } from '~utils/index';
import { TModal } from './t-modal';
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
  const [loading, setLoading] = useState(false);

  const modalAction = async () => {
    let res: unknown;
    if (action && isFuncPromise(action)) {
      setLoading(true);

      res = await action();

      setLoading(false);
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
    <div className="fixed text-left transition-all flex justify-center md:items-center bg-[#a4a3a3d3] top-0 left-0 h-screen w-screen z-50 p-8">
      <div
        className={`min-w-[100%] transition-all relative flex flex-col h-fit max-h-[80vh] sm:max-h-[90vh] ${
          sizes[size || 'lg']
        } bg-white shadow-sm p-6 rounded-md`}
      >
        {close && (
          <div className="text-right">
            <BaseBtn
              testId="close-modal"
              onClick={() => close((prev) => !prev)}
            >
              <CancelIcon height={25} width={25} />
            </BaseBtn>
          </div>
        )}
        {isLoading ? (
          <div className="mt-8">
            <SkeletonLoader type="text" />
          </div>
        ) : (
          <>
            {title && (
              <header className="shrink-0">
                <div className=" text-xl font-semibold">{title}</div>
              </header>
            )}
            <main className={`grow ${scroll ? 'overflow-y-auto' : ''}`}>
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
