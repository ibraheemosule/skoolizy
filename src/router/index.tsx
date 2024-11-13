import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Layout from '~components/Layout';
import AuthAccess from './router-widgets/AuthAccess';
import LazyLoad from './router-widgets/LazyLoad';
import SaveLastRoute from './router-widgets/SaveLastRoute';

function AppRoutes() {
  return (
    <Router>
      <SaveLastRoute>
        <Routes>
          <Route element={<AuthAccess />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route
                path="dashboard"
                element={
                  <LazyLoad url={() => import('~components/pages/Dashboard')} />
                }
              />
              <Route
                path="announcements"
                element={
                  <LazyLoad
                    url={() => import('~components/pages/Announcements')}
                  />
                }
              />
              <Route
                path="feeds"
                element={
                  <LazyLoad url={() => import('~components/pages/Feeds')} />
                }
              />
              <Route
                path="requests"
                element={
                  <LazyLoad url={() => import('~components/pages/Requests')} />
                }
              />

              <Route
                path="students"
                element={
                  <LazyLoad url={() => import('~components/pages/Students')} />
                }
              >
                <Route
                  index
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/Students/AllStudents')
                      }
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Students/student-widgets/StudentDetail'
                        )
                      }
                    />
                  }
                >
                  <Route index element={<Navigate to="biodata" />} />
                  <Route
                    path="biodata"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Students/student-widgets/StudentDetail/routes/StudentBiodata'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="performance"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Students/student-widgets/StudentDetail/routes/StudentPerformance'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="results"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Students/student-widgets/StudentDetail/routes/StudentResults'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="attendance"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Students/student-widgets/StudentDetail/routes/StudentAttendance'
                          )
                        }
                      />
                    }
                  />
                </Route>
              </Route>

              <Route
                path="Staffs"
                element={
                  <LazyLoad url={() => import('~components/pages/Staffs')} />
                }
              >
                <Route
                  index
                  element={
                    <LazyLoad
                      url={() => import('~components/pages/Staffs/AllStaffs')}
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Staffs/staff-widgets/StaffDetail'
                        )
                      }
                    />
                  }
                >
                  <Route index element={<Navigate to="biodata" />} />
                  <Route
                    path="biodata"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Staffs/staff-widgets/StaffDetail/routes/StaffBiodata'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="performance"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Staffs/staff-widgets/StaffDetail/routes/StaffPerformance'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="results"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Staffs/staff-widgets/StaffDetail/routes/StaffResults'
                          )
                        }
                      />
                    }
                  />
                </Route>
              </Route>

              <Route
                path="classroom"
                element={
                  <LazyLoad url={() => import('~components/pages/Classroom')} />
                }
              >
                <Route index element={<Navigate to="stats" />} />
                <Route
                  path="stats"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Classroom/classroom-routes/ClassroomStats'
                        )
                      }
                    />
                  }
                />
                <Route
                  path="timetable"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Classroom/classroom-routes/ClassroomTimetable'
                        )
                      }
                    />
                  }
                />
                <Route
                  path="record-grade"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Classroom/classroom-routes/ClassroomRecordGrade'
                        )
                      }
                    />
                  }
                />
                <Route
                  path="performance"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Classroom/classroom-routes/ClassroomPerformance'
                        )
                      }
                    />
                  }
                />
              </Route>

              <Route
                path="subjects"
                element={
                  <LazyLoad url={() => import('~components/pages/Subjects')} />
                }
              >
                <Route
                  index
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/Subjects/AllSubjects')
                      }
                    />
                  }
                />
                <Route
                  path=":id"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/Subjects/subject-widgets/SubjectDetail'
                        )
                      }
                    />
                  }
                >
                  <Route index element={<Navigate to="topics" />} />
                  <Route
                    path="topics"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Subjects/subject-widgets/SubjectDetail/routes/SubjectTopics'
                          )
                        }
                      />
                    }
                  />
                  <Route
                    path="Staffs"
                    element={
                      <LazyLoad
                        url={() =>
                          import(
                            '~components/pages/Subjects/subject-widgets/SubjectDetail/routes/SubjectStaff'
                          )
                        }
                      />
                    }
                  />
                </Route>
              </Route>

              <Route
                path="media"
                element={
                  <LazyLoad url={() => import('~components/pages/Media')} />
                }
              />
              <Route
                path="settings"
                element={
                  <LazyLoad url={() => import('~components/pages/Settings')} />
                }
              />

              <Route
                path="my-profile"
                element={
                  <LazyLoad url={() => import('~components/pages/MyProfile')} />
                }
              >
                <Route index element={<Navigate to="personal-information" />} />
                <Route
                  path="personal-information"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/MyProfile/routes/PersonalInfo'
                        )
                      }
                    />
                  }
                />
                <Route
                  path="academic-information"
                  element={
                    <LazyLoad
                      url={() =>
                        import(
                          '~components/pages/MyProfile/routes/AcademicInfo'
                        )
                      }
                    />
                  }
                />
                <Route
                  path="contact-information"
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/MyProfile/routes/ContactInfo')
                      }
                    />
                  }
                />
              </Route>
            </Route>
          </Route>
          <Route path="auth">
            <Route
              path="login"
              element={
                <LazyLoad url={() => import('~components/pages/Auth/Login')} />
              }
            />
            <Route
              path="signup"
              element={
                <LazyLoad url={() => import('~components/pages/Auth/Signup')} />
              }
            />
            <Route
              path="reset-password"
              element={
                <LazyLoad
                  url={() => import('~components/pages/Auth/ResetPassword')}
                />
              }
            />
            <Route
              path="verify-account"
              element={
                <LazyLoad
                  url={() => import('~components/pages/Auth/VerifyAccount')}
                />
              }
            />
          </Route>
        </Routes>
      </SaveLastRoute>
    </Router>
  );
}

export default AppRoutes;
