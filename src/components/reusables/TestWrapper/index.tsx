import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const TestWrapper = ({ children }: { children: ReactElement }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>
);

export default TestWrapper;
