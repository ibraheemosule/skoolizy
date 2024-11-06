import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query';
import AppRoutes from '~src/router';
import Boundary from './Boundary';

const queryCache = new QueryCache({});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

const App = () => (
  <Boundary>
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  </Boundary>
);

export default App;
