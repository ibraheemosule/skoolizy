import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '~components/Layout';
import Dashboard from '~components/pages/Dashboard';
import Login from '~components/pages/Login';
import Requests from '~components/pages/Requests';
import Teachers from '~components/pages/Teachers';
import Students from '~components/pages/Students';
import Classroom from '~components/pages/Classroom';
import ClassroomStats from '~components/pages/Classroom/classroom-routes/Stats';
import TimeTable from '~components/pages/Classroom/classroom-routes/Timetable';
import RecordGrade from '~components/pages/Classroom/classroom-routes/RecordGrade';
import MyProfile from '~components/pages/MyProfile';
import PersonalInfo from '~components/pages/MyProfile/my-profile-routes/PersonalInfo';
import AcademicInfo from '~components/pages/MyProfile/my-profile-routes/AcademicInfo';
import ContactInfo from '~components/pages/MyProfile/my-profile-routes/ContactInfo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
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
          {
            path: 'record-grade',
            element: <RecordGrade />,
          },
        ],
      },
      {
        path: 'subjects',
        element: <Students />,
      },
      {
        path: 'media',
        element: <Students />,
      },
      {
        path: 'announcements',
        element: <Students />,
      },
      {
        path: 'school-information',
        element: <Students />,
      },
      {
        path: 'settings',
        element: <Students />,
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
