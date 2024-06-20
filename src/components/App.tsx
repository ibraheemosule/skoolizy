import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from '~src/router';
import popup from '~utils/popup';

const queryCache = new QueryCache({
  onError: (error) => {
    popup(
      'error',
      `Error: ${(error as unknown as { response: { data: { error: string } } })
        .response?.data?.error}` || error.message
    );
  },
});

const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      staleTime: 1000 * 60 * 5,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
  </QueryClientProvider>
);

export default App;
