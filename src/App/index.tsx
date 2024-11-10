import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
  MutationCache,
} from '@tanstack/react-query';
import AppRoutes from '~src/router';
import AppErrorHandler from './AppErrorHandler';
import ApiErrorHandler, { handleApiErrorFn } from './apiErrorHandler';
import { TApiError } from '~shared-ts-types/t-api';

const queryClient = new QueryClient({
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

const App = () => (
  <AppErrorHandler>
    <QueryClientProvider client={queryClient}>
      <ApiErrorHandler />
      <AppRoutes />
    </QueryClientProvider>
  </AppErrorHandler>
);

export default App;
