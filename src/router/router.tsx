import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from 'components/layout/Layout';
import Dashboard from 'components/pages/dashboard/Dashboard';
import Login from 'components/pages/Login';
import Requests from 'components/pages/requests/Requests';
import Teachers from 'components/pages/teachers';
import Students from 'components/pages/students';
import Classroom from 'components/pages/classroom';
import ClassroomStats from 'components/pages/classroom/classroom-routes/stats/Stats';
import TimeTable from 'components/pages/classroom/classroom-routes/timetable';
import RecordGrade from 'components/pages/record-grade/index';

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
      {
        path: 'record-grade',
        element: <RecordGrade />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
