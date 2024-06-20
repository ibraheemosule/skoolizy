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
  scroll?: boolean;
  fixedActionBtn?: boolean;
} & {
  [key in 'title' | 'content']?: ReactNode;
};

const sizes = {
  sm: 'sm:min-w-[50%] lg:min-w-[30%] lg:max-w-[30vw] xl:max-w-[400px]',
  md: 'sm:min-w-[65%] lg:min-w-[40%] md:max-w-[60vw] lg:max-w-[40vw] xl:max-w-[700px]',
  lg: 'sm:min-w-[90%] lg:min-w-[60%]',
};

const Modal: FC<TModal> = ({
  close,
  action,
  title,
  content,
  actionText,
  size,
  scroll = true,
  fixedActionBtn = false,
}) => {
  const modal = useRef<ElementRef<'div'>>(null);

  const actionUI = (
    <div className="mt-4 shrink-0  w-full">
      <ActionBtn onClick={action}>{actionText || 'Submit'}</ActionBtn>
    </div>
  );

  return (
    <div
      ref={modal}
      onClick={(e) => e.target === modal.current && close((prev) => !prev)}
      className="fixed text-left transition-all flex justify-center md:items-center bg-[#a4a3a3d3] top-0 left-0 h-screen w-screen z-50 p-8"
    >
      <div
        className={`transition-all relative min-w-[280px] flex flex-col h-fit max-h-[80vh] sm:max-h-[90vh] ${
          sizes[size || 'lg']
        } bg-white shadow-sm p-6 rounded-md`}
      >
        <div className="absolute top-4 right-4">
          <BaseBtn testId="close-modal" onClick={() => close((prev) => !prev)}>
            <CancelIcon height={25} width={25} />
          </BaseBtn>
        </div>
        <header className="shrink-0">
          <h3 className=" text-xl font-semibold max-w-[90%]">{title}</h3>
        </header>
        <main className={`grow my-6 ${scroll ? 'overflow-y-auto' : ''}`}>
          {content}
          {action && !fixedActionBtn && actionUI}
        </main>
        {action && fixedActionBtn && actionUI}
      </div>
    </div>
  );
};

export default memo(Modal);
