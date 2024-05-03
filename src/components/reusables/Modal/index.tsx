import {
  Dispatch,
  FC,
  SetStateAction,
  memo,
  ReactNode,
  useRef,
  ElementRef,
} from 'react';
import { ActionBtn, BaseBtn } from '~components/reusables/ui/Buttons';
import CancelIcon from '~src/assets/Icons/CancelIcon';

type TModal = {
  close: Dispatch<SetStateAction<boolean>> | (() => void);
  action?: () => void;
  actionText?: string;
  size?: 'sm' | 'md' | 'lg';
} & {
  [key in 'title' | 'content']?: ReactNode;
};

const sizes = {
  sm: 'max-w-[40vw] lg:max-w-[30vw] xl:max-w-[400px]',
  md: 'max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[700px]',
  lg: 'max-w-[80vw]',
};

const Modal: FC<TModal> = ({
  close,
  action,
  title,
  content,
  actionText,
  size,
}) => {
  const modal = useRef<ElementRef<'div'>>(null);

  return (
    <div
      ref={modal}
      onClick={(e) => e.target === modal.current && close((prev) => !prev)}
      className="absolute transition-all grid place-items-center bg-[#918e8eb3] top-0 left-0 h-screen w-screen z-50 p-8"
    >
      <div
        className={`transition-all relative min-w-[280px] ${
          sizes[size || 'lg']
        } bg-white shadow-sm p-6 rounded-md`}
      >
        <div className="absolute top-4 right-4">
          <BaseBtn onClick={() => close((prev) => !prev)}>
            <CancelIcon height={25} width={25} />
          </BaseBtn>
        </div>
        <header>
          <h3 className=" text-xl font-semibold max-w-[90%]">{title}</h3>
        </header>
        <main className="my-6 max-h-[65vh] overflow-y-auto">
          {content}
          {action && (
            <ActionBtn
              onClick={() => action()}
              className="mt-4 px-4 py-2 w-full text-purple.dark hover:opacity-50"
            >
              {actionText || 'Submit'}
            </ActionBtn>
          )}
        </main>
      </div>
    </div>
  );
};

export default memo(Modal);
