import { Component, ReactNode, useEffect } from 'react';
import Icon from '~assets/Icons';
import Banner from '~components/reusables/Banner';
import useBanner from '~components/reusables/hooks/useBanner';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import { TApiError } from '~shared-ts-types/t-api';

const BoundaryBanner: React.FC<{ message: string }> = ({ message }) => {
  const { banner } = useBanner();

  useEffect(() => {
    if (message) {
      banner({
        text: message,
        type: 'error',
        timeout: 4,
      });
    }
  }, [message]);

  return <Banner />;
};

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  errorType?: 'api' | 'app';
  errMessage: string;
}

class Boundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { errMessage: '' };
  }

  static getDerivedStateFromError(
    error: Error | TApiError
  ): ErrorBoundaryState {
    const apiError = (error as TApiError)?.response?.data?.message;

    if (apiError) {
      return { errMessage: apiError, errorType: 'api' };
    }
    return {
      errMessage: 'Something went wrong.',
      errorType: 'app',
    };
  }

  render() {
    const { errMessage, errorType } = this.state;
    const { children } = this.props;

    return errorType === 'app' ? (
      <div className="grid place-items-center h-screen bg-gray-200 text-center text-brown.dark p-6">
        <div>
          <div className="flex">
            <Icon name="info" fill="currentColor" className="mr-2 mt-1" />
            <strong className="text-2xl font-bold">Oops! {errMessage}</strong>
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
      <>
        <BoundaryBanner message={errMessage} />
        {children}
      </>
    );
  }
}

export default Boundary;
