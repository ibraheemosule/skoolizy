import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

import { handleApiErrorFn } from './ApiErrorHandler';
import { TApiError } from '~shared-ts-types/t-api';

export default new QueryClient({
  queryCache: new QueryCache({
    onError: (e) => handleApiErrorFn(e as unknown as TApiError),
  }),
  mutationCache: new MutationCache({
    onError: (e) => handleApiErrorFn(e as unknown as TApiError),
  }),
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});
