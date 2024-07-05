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
  <div className="min-h-[50vh] border-gray-200 border bg-gray-50 rounded-lg flex flex-col justify-center items-center gap-4 mt-8">
    <img className="w-24 h-24 grayscale opacity-70" src={empty} alt={message} />
    <h3 className="text-xl font-medium">{message}</h3>
    {action && (
      <div className="mt-2">
        <ActionBtn onClick={action}>{actionText}</ActionBtn>
      </div>
    )}
  </div>
);

export default EmptyView;