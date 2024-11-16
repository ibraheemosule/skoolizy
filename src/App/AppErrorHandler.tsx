import { Component, ReactNode } from 'react';
import Icon from '~assets/Icons';
import { ActionBtn } from '~components/reusables/ui/Buttons';

type TAppErrorHandlerProps = {
  children: ReactNode;
};

type TAppErrorHandler = {
  error: boolean;
};

class AppErrorHandler extends Component<
  TAppErrorHandlerProps,
  TAppErrorHandler
> {
  constructor(props: TAppErrorHandlerProps) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(): TAppErrorHandler {
    return {
      error: true,
    };
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;

    return error ? (
      <div className="grid place-items-center h-screen bg-gray-200 text-center text-brown.dark p-6">
        <div>
          <div className="flex">
            <Icon name="info" fill="currentColor" className="mr-2 mt-1" />
            <strong className="text-2xl font-bold">
              Oops! Something went wrong.
            </strong>
          </div>
          <p className="mt-4 text-md font-semibold">
            Please try refreshing the page or return later.
          </p>
          <div className="w-32 mt-4 mx-auto">
            <ActionBtn onClick={() => window.location.reload()}>
              Refresh page
            </ActionBtn>
          </div>
        </div>
      </div>
    ) : (
      children
    );
  }
}

export default AppErrorHandler;
