import { ActionBtn } from '../ui/Buttons';
import empty from '~assets/Icons/empty.svg';

type TEmptyView = {
  message?: string;
  action?: () => void;
  actionText?: string;
};

const EmptyView = ({
  message = 'An Error Ocurred',
  action,
  actionText = 'Retry?',
}: TEmptyView) => (
  <div className="min-h-[50vh] bg-gray-100 rounded-lg flex flex-col justify-center items-center gap-4 mt-8">
    <img className="w-24 h-24 grayscale" src={empty} alt={message} />
    <h3 className="text-xl font-medium">{message}</h3>
    {action && (
      <ActionBtn onClick={action} className="p-2 px-4 mt-2">
        {actionText}
      </ActionBtn>
    )}
  </div>
);

export default EmptyView;
