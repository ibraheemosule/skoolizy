import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
}: TListOptins) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap justify-end gap-4">
      {search && (
        <BaseBtn
          className="font-bold text-purple.dark hover:opacity-50"
          onClick={() => navigate('.', { replace: true })}
        >
          <span className="flex items-center gap-x-1">
            Clear Filters
            <Icon name="cancel" height={14} width={14} strokeWidth={4} />
          </span>
        </BaseBtn>
      )}
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
        <ActionBtn
          testId="list-action-btn"
          onClick={onActionClick}
          className="px-4 py-2 text-purple.dark hover:opacity-50"
        >
          {actionText}
        </ActionBtn>
      )}
    </div>
  );
};

export default memo(ListOptions);
