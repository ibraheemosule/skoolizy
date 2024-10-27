import { Navigate, createBrowserRouter, RouteObject } from 'react-router-dom';
import { ComponentType, Suspense, lazy } from 'react';
import Layout from '~components/Layout';
import logo from '~assets/images/logo.png';

type TRouter = RouteObject & {
  url: () => Promise<{ default: ComponentType<unknown> }>;
};

function lazyLoad({ url, ...props }: TRouter): RouteObject {
  const Component = lazy(url);

  return {
    ...props,
    element: (
      <Suspense
        fallback={
          <div className="h-full w-full grid place-items-center">
            <span className="sr-only">page is oading...</span>
            <img
              className="h-16 w-16 animate-pulse"
              src={logo}
              alt="page loading"
            />
          </div>
        }
      >
        <Component />
      </Suspense>
    ),
  } as unknown as RouteObject;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      lazyLoad({
        path: 'dashboard',
        url: () => import('~components/pages/Dashboard'),
      }),
      lazyLoad({
        path: 'announcements',
        url: () => import('~components/pages/Announcements'),
      }),
      lazyLoad({
        path: 'feeds',
        url: () => import('~components/pages/Feeds'),
      }),
      lazyLoad({
        path: 'requests',
        url: () => import('~components/pages/Requests'),
      }),
      lazyLoad({
        path: 'students',
        url: () => import('~components/pages/Students'),
        children: [
          lazyLoad({
            path: '',
            url: () => import('~components/pages/Students/AllStudents'),
          }),
          lazyLoad({
            path: ':id',
            url: () => import('~components/pages/Students/Detail'),
            children: [
              {
                path: '',
                element: <Navigate to="biodata" />,
              },
              lazyLoad({
                path: 'biodata',
                url: () =>
                  import('~components/pages/Students/Detail/routes/Biodata'),
              }),
              lazyLoad({
                path: 'performance',
                url: () =>
                  import(
                    '~components/pages/Students/Detail/routes/Performance'
                  ),
              }),
              lazyLoad({
                path: 'results',
                url: () =>
                  import('~components/pages/Students/Detail/routes/Results'),
              }),
              lazyLoad({
                path: 'attendance',
                url: () =>
                  import('~components/pages/Students/Detail/routes/Attendance'),
              }),
            ],
          }),
        ],
      }),
      lazyLoad({
        path: 'teachers',
        url: () => import('~components/pages/Teachers'),
        children: [
          lazyLoad({
            path: '',
            url: () => import('~components/pages/Teachers/AllTeachers'),
          }),
          lazyLoad({
            path: ':id',
            url: () => import('~components/pages/Teachers/Detail'),
            children: [
              {
                path: '',
                element: <Navigate to="biodata" />,
              },
              lazyLoad({
                path: 'biodata',
                url: () =>
                  import('~components/pages/Teachers/Detail/routes/Biodata'),
              }),
              lazyLoad({
                path: 'performance',
                url: () =>
                  import(
                    '~components/pages/Teachers/Detail/routes/Performance'
                  ),
              }),
              lazyLoad({
                path: 'results',
                url: () =>
                  import('~components/pages/Teachers/Detail/routes/Results'),
              }),
            ],
          }),
        ],
      }),
      lazyLoad({
        path: 'classroom',
        url: () => import('~components/pages/Classroom'),
        children: [
          {
            path: '',
            element: <Navigate to="stats" />,
          },
          lazyLoad({
            path: 'stats',
            url: () =>
              import('~components/pages/Classroom/classroom-routes/Stats'),
          }),
          lazyLoad({
            path: 'timetable',
            url: () =>
              import('~components/pages/Classroom/classroom-routes/Timetable'),
          }),
          lazyLoad({
            path: 'record-grade',
            url: () =>
              import(
                '~components/pages/Classroom/classroom-routes/RecordGrade'
              ),
          }),
          lazyLoad({
            path: 'performance',
            url: () =>
              import(
                '~components/pages/Classroom/classroom-routes/Performance'
              ),
          }),
        ],
      }),
      lazyLoad({
        path: 'subjects',
        url: () => import('~components/pages/Students'),
        children: [
          lazyLoad({
            path: '',
            url: () => import('~components/pages/Subjects/AllSubjects'),
          }),
          lazyLoad({
            path: ':id',
            url: () => import('~components/pages/Subjects/Detail'),
            children: [
              {
                path: '',
                element: <Navigate to="topics" />,
              },
              lazyLoad({
                path: 'topics',
                url: () =>
                  import('~components/pages/Subjects/Detail/routes/Topics'),
              }),
              lazyLoad({
                path: 'teachers',
                url: () =>
                  import('~components/pages/Subjects/Detail/routes/Teachers'),
              }),
            ],
          }),
        ],
      }),
      lazyLoad({
        path: 'media',
        url: () => import('~components/pages/Media'),
      }),
      lazyLoad({
        path: 'settings',
        url: () => import('~components/pages/Settings'),
      }),

      lazyLoad({
        path: 'my-profile',
        url: () => import('~components/pages/MyProfile'),
        children: [
          {
            path: '',
            element: <Navigate to="personal-information" />,
          },
          lazyLoad({
            path: 'personal-information',
            url: () =>
              import('~components/pages/MyProfile/routes/PersonalInfo'),
          }),
          lazyLoad({
            path: 'academic-information',
            url: () =>
              import('~components/pages/MyProfile/routes/AcademicInfo'),
          }),
          lazyLoad({
            path: 'contact-information',
            url: () => import('~components/pages/MyProfile/routes/ContactInfo'),
          }),
        ],
      }),
    ],
  },
  lazyLoad({
    path: 'auth/login',
    url: () => import('~components/pages/Auth/Login'),
  }),
  lazyLoad({
    path: 'auth/signup',
    url: () => import('~components/pages/Auth/Signup'),
  }),
  lazyLoad({
    path: 'auth/reset-password',
    url: () => import('~components/pages/Auth/ResetPassword'),
  }),
  lazyLoad({
    path: 'auth/verify-account',
    url: () => import('~components/pages/Auth/VerifyAccount'),
  }),
]);

export default router;
