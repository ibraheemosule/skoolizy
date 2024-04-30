import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '~components/layout';
import Dashboard from '~components/pages/dashboard';
import Login from '~components/pages/Login';
import Requests from '~components/pages/requests';
import Teachers from '~components/pages/teachers';
import Students from '~components/pages/students';
import Classroom from '~components/pages/classroom';
import ClassroomStats from '~components/pages/classroom/classroom-routes/stats';
import TimeTable from '~components/pages/classroom/classroom-routes/timetable';
import RecordGrade from '~components/pages/record-grade';
import MyProfile from '~components/pages/my-profile';
import PersonalInfo from '~components/pages/my-profile/my-profile-routes/personal-info';
import AcademicInfo from '~components/pages/my-profile/my-profile-routes/academic-info';
import ContactInfo from '~components/pages/my-profile/my-profile-routes/contact-info';

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
      {
        path: 'my-profile',
        element: <MyProfile />,

        children: [
          {
            path: '',
            element: <Navigate to="personal-information" />,
          },
          {
            path: 'academic-information',
            element: <AcademicInfo />,
          },
          {
            path: 'personal-information',
            element: <PersonalInfo />,
          },
          {
            path: 'contact-information',
            element: <ContactInfo />,
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
