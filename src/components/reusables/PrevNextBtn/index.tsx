import { memo, FC } from 'react';
import { TPrevNextBtn } from './u-prevNextBtn';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';

const PrevNextBtn: FC<TPrevNextBtn> = ({
  disableNext,
  disablePrev,
  prevAction,
  nextAction,
}) => (
  <div className="flex flex-wrap justify-between">
    <ActionBtn
      disabled={disablePrev}
      onClick={prevAction}
      className="flex gap-1 px-2 py-1 disabled:bg-gray-200 disabled:hover:opacity-100 items-center text-white text-sm font-normal bg-purple.dark rounded-lg hover:opacity-50"
    >
      <Icon name="caretLeftSolid" width={12} height={12} />
      <span>Previous</span>
    </ActionBtn>
    {nextAction && (
      <ActionBtn
        disabled={disableNext}
        onClick={nextAction}
        className="flex gap-1 px-2 py-1 disabled:bg-gray-200 disabled:hover:opacity-100 items-center ml-auto text-white text-sm font-normal bg-purple.dark rounded-lg hover:opacity-50"
      >
        <span>Next</span>
        <Icon name="caretRightSolid" width={12} height={12} />
      </ActionBtn>
    )}
  </div>
);

export default memo(PrevNextBtn);
