import { createBrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Dashboard from 'components/pages/dashboard/Dashboard';
import Login from 'components/pages/Login/Login';
import Requests from 'components/pages/requests/Requests';
import Teachers from 'components/pages/teachers/Teachers';
import Students from 'components/pages/students/Students';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'requests', element: <Requests /> },
      { path: 'teachers', element: <Teachers /> },
      { path: 'students', element: <Students /> },
    ],
  },
  { path: '/login', element: <Login /> },
]);

export default router;
