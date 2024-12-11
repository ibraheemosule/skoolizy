import { FC, useEffect } from 'react';

import Banner from '~components/reusables/Banner';
import useBanner from '~components/reusables/hooks/useBanner';

import { IBannerOptions } from '~shared-ts-types/react-types';
import { TApiError } from '~shared-ts-types/t-api';
import { BANNER_DEFAULT_TIMEOUT } from '~utils';

let apiErrorBanner: ((args: IBannerOptions) => void) | null = null;

export const handleApiErrorFn = (error: TApiError) => {
  if (apiErrorBanner) {
    apiErrorBanner({
      text: error?.response?.data?.message,
      type: 'error',
      timeout: BANNER_DEFAULT_TIMEOUT,
    });
  } else throw Error('Uncaught api error');
};

const ApiErrorHandler: FC = () => {
  const { banner } = useBanner();

  useEffect(() => {
    apiErrorBanner = banner;
  }, []);

  return <Banner />;
};

export default ApiErrorHandler;
