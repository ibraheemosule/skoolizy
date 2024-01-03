import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Dashboard from 'components/pages/dashboard/Dashboard';
import Login from 'components/pages/Login/Login';
import Requests from 'components/pages/requests/Requests';
import Teachers from 'components/pages/teachers/Teachers';
import Students from 'components/pages/students/Students';
import Classroom from 'components/pages/classroom/Classroom';
import ClassroomStats from 'components/pages/classroom/classroom-routes/stats/Stats';
import TimeTable from 'components/pages/classroom/classroom-routes/timetable/TimeTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'requests',
        element: <Requests />,
      },
      {
        path: 'teachers',
        element: <Teachers />,
      },
      {
        path: 'students',
        element: <Students />,
      },
      {
        path: 'classroom',
        element: <Classroom />,

        children: [
          {
            path: '',
            element: <Navigate to="stats" />,
          },
          {
            path: 'stats',
            element: <ClassroomStats />,
          },
          {
            path: 'timetable',
            element: <TimeTable />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
