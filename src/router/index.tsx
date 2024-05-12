import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '~components/Layout';
import Dashboard from '~components/pages/Dashboard';
import Login from '~components/pages/Login';
import Requests from '~components/pages/Requests';
import Media from '~components/pages/Media';
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
import Feeds from '~components/pages/Feeds';
import Subjects from '~components/pages/Subjects';
import Announcements from '~components/pages/Announcements';
import SubjectDetail from '~components/pages/Subjects/Detail';
import SubjectStats from '~components/pages/Subjects/Detail/routes/Topics';
import SubjectTimetable from '~components/pages/Subjects/Detail/routes/Teachers';
import SubjectPerformance from '~components/pages/Subjects/Detail/routes/Performance';
import AllSubjects from '~components/pages/Subjects/AllSubjects';
import AllStudents from '~components/pages/Students/AllStudents';
import StudentDetail from '~components/pages/Students/Detail';

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
        path: 'announcements',
        element: <Announcements />,
      },
      {
        path: 'feeds',
        element: <Feeds />,
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
        children: [
          { path: '', element: <AllStudents /> },
          {
            path: ':id',
            element: <StudentDetail />,
            children: [
              {
                path: '',
                element: <Navigate to="topics" />,
              },
              {
                path: 'topics',
                element: <SubjectStats />,
              },
              {
                path: 'teachers',
                element: <SubjectTimetable />,
              },
              {
                path: 'performance',
                element: <SubjectPerformance />,
              },
            ],
          },
        ],
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
        element: <Subjects />,
        children: [
          { path: '', element: <AllSubjects /> },
          {
            path: ':id',
            element: <SubjectDetail />,
            children: [
              {
                path: '',
                element: <Navigate to="topics" />,
              },
              {
                path: 'topics',
                element: <SubjectStats />,
              },
              {
                path: 'teachers',
                element: <SubjectTimetable />,
              },
              {
                path: 'performance',
                element: <SubjectPerformance />,
              },
            ],
          },
        ],
      },
      {
        path: 'media',
        element: <Media />,
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
