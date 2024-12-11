import { ActionBtn } from '../ui/Buttons';
import empty from '~assets/Icons/empty.svg';
import errorImg from '~assets/images/error.png';

type TEmptyView = {
  message?: string;
  action?: () => void;
  actionText?: string;
  height?: string;
  error?: boolean;
};

const EmptyView = ({
  message = 'An Error Ocurred',
  action,
  actionText = 'Retry?',
  height = '50vh',
  error,
}: TEmptyView) => (
  <div
    style={{ minHeight: height }}
    className=" border-gray-100 border bg-gray-50 rounded-lg flex flex-col justify-center items-center gap-4 mt-8"
  >
    <img
      className="w-20 h-20 grayscale opacity-70"
      src={error ? errorImg : empty}
      alt={message}
    />
    <h3 className="text-xl font-medium">{message}</h3>
    {action && (
      <div className="mt-2">
        <ActionBtn onClick={action}>{actionText}</ActionBtn>
      </div>
    )}
  </div>
);

export default EmptyView;
