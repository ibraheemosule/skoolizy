import { memo } from 'react';
import { BaseBtn, ActionBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';

type TListOptins = {
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
}: TListOptins) => (
  <div className="flex flex-wrap justify-end gap-4">
    {onManageClick && (
      <BaseBtn
        onClick={onManageClick}
        className="flex gap-2 items-center font-bold text-purple.dark hover:opacity-50"
      >
        {manageText} <Icon name="filter" height={20} width={20} />
      </BaseBtn>
    )}
    {onActionClick && (
      <ActionBtn
        onClick={onActionClick}
        className="px-4 py-2 text-purple.dark hover:opacity-50"
      >
        {actionText}
      </ActionBtn>
    )}
  </div>
);

export default memo(ListOptions);