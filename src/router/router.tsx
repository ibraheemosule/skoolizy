import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Dashboard from 'components/pages/dashboard/Dashboard';
import Login from 'components/pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'requests', element: <Dashboard /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

export default router;
