import { QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from '~src/router';
import AppErrorHandler from './AppErrorHandler';
import ApiErrorHandler from './ApiErrorHandler';
import appQueryClient from './appQueryClient';

const App = () => (
  <AppErrorHandler>
    <QueryClientProvider client={appQueryClient}>
      <ApiErrorHandler />
      <AppRoutes />
    </QueryClientProvider>
  </AppErrorHandler>
);

export default App;
