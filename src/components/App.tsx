import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from '~src/router';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />;
  </QueryClientProvider>
);

export default App;
