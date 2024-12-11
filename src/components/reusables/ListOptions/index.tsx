import { memo } from 'react';
import { BaseBtn, ActionBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';

type TListOptions = {
  onManageClick?: () => void;
  manageText?: string;
  onActionClick?: () => void;
  actionText?: string;
};

const ListOptions = ({
  onManageClick,
  manageText = 'Manage List',
  onActionClick,
  actionText = 'Add new',
}: TListOptions) => (
  <div className="flex flex-wrap justify-end gap-4 text-purple.dark font-semibold">
    {onManageClick && (
      <BaseBtn
        testId="manage-list"
        onClick={onManageClick}
        className="flex gap-2 items-center font-bold text-purple.dark hover:opacity-50"
      >
        {manageText} <Icon name="filter" height={20} width={20} />
      </BaseBtn>
    )}
    {onActionClick && (
      <div>
        <ActionBtn testId="list-action-btn" onClick={onActionClick}>
          {actionText}
        </ActionBtn>
      </div>
    )}
  </div>
);

export default memo(ListOptions);
