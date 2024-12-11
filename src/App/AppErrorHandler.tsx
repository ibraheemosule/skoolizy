import { Component, ReactElement, ReactNode } from 'react';
import Icon from '~assets/Icons';
import notFoundImg from '~assets/images/notFound.svg';
import bugFixImg from '~assets/images/bug-fixing.svg';
import { ActionBtn } from '~components/reusables/ui/Buttons';

type TAppErrorHandlerProps = {
  children: ReactNode;
};

type TAppErrorHandler = {
  error: boolean;
  primaryText: string;
  secondaryText: string | ReactElement;
  btnText: string;
};

class AppErrorHandler extends Component<
  TAppErrorHandlerProps,
  TAppErrorHandler
> {
  constructor(props: TAppErrorHandlerProps) {
    super(props);
    this.state = {
      error: false,
      primaryText: '',
      secondaryText: '',
      btnText: '',
    };
    this.errorPageBtnAction = this.errorPageBtnAction.bind(this);
  }

  static getDerivedStateFromError(e: Error): TAppErrorHandler {
    let errState: TAppErrorHandler = {
      error: true,
      primaryText: 'Oops! Something went wrong.',
      secondaryText: 'Please try refreshing the page or return later.',
      btnText: 'Refresh page',
    };

    if (e?.message === 'Page not found') {
      errState = {
        ...errState,
        primaryText: 'Page not found!',
        secondaryText: (
          <>
            <div>It seems you wandered and got lost 😄</div>
            <div className="mt-2 text-base">
              Dont fret, we can help you find your way.
            </div>
          </>
        ),
        btnText: 'Return Home',
      };
    }

    return errState;
  }

  errorPageBtnAction() {
    const { primaryText } = this.state;

    if (primaryText.includes('not found')) {
      window.location.replace('/dashboard');
    } else window.location.reload();
  }

  render() {
    const { error, btnText, primaryText, secondaryText } = this.state;
    const notFound = primaryText.includes('not found');
    const { children } = this.props;

    return error ? (
      <div className="grid place-items-center h-screen bg-gray-200 text-center text-brown.dark p-6">
        <div>
          <img
            src={notFound ? notFoundImg : bugFixImg}
            className="w-72 h-auto mx-auto"
            alt="Page not found"
          />
          <div className="flex justify-center items-center">
            <Icon name="info" fill="currentColor" className="mr-2" />
            <strong className="text-3xl font-bold">{primaryText}</strong>
          </div>

          <p className="mt-4 text-xl font-semibold">{secondaryText}</p>

          <div className="w-32 mt-4 mx-auto">
            <ActionBtn onClick={this.errorPageBtnAction}>{btnText}</ActionBtn>
          </div>
        </div>
      </div>
    ) : (
      children
    );
  }
}

export default AppErrorHandler;
