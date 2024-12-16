import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import Layout from '~components/Layout';
import AuthAccess from './widgets-router/AuthAccess';
import LazyLoad from './widgets-router/LazyLoad';
import SaveLastRoute from './widgets-router/SaveLastRoute';
import NotFound from './widgets-router/NotFoundPage';

function AppRoutes() {
  return (
    <Router>
      <SaveLastRoute>
        <Routes>
          <Route path="/" element={<Navigate to="auth/login" replace />} />
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
          <Route element={<AuthAccess />}>
            <Route element={<Layout />}>
              <Route element={<Navigate to="dashboard" />} />
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
                  path=":tag"
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/Students/StudentDetail')
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
                            '~components/pages/Students/StudentDetail/routes-studentDetail/StudentBiodata'
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
                            '~components/pages/Students/StudentDetail/routes-studentDetail/StudentPerformance'
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
                            '~components/pages/Students/StudentDetail/routes-studentDetail/StudentResults'
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
                            '~components/pages/Students/StudentDetail/routes-studentDetail/StudentAttendance'
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
                  path=":tag"
                  element={
                    <LazyLoad
                      url={() => import('~components/pages/Staffs/StaffDetail')}
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
                            '~components/pages/Staffs/StaffDetail/routes-staffDetail/StaffBiodata'
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
                            '~components/pages/Staffs/StaffDetail/routes-staffDetail/StaffPerformance'
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
                            '~components/pages/Staffs/StaffDetail/routes-staffDetail/StaffResults'
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
                            '~components/pages/Staffs/StaffDetail/routes-staffDetail/StaffAttendance'
                          )
                        }
                      />
                    }
                  />
                </Route>
              </Route>

              <Route
                path="Guardians"
                element={
                  <LazyLoad url={() => import('~components/pages/Guardians')} />
                }
              >
                <Route
                  index
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/Guardians/AllGuardians')
                      }
                    />
                  }
                />
                <Route
                  path=":tag"
                  element={
                    <LazyLoad
                      url={() =>
                        import('~components/pages/Guardians/GuardianDetail')
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
                            '~components/pages/Guardians/GuardianDetail/routes-guardianDetail/GuardianBiodata'
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
                          '~components/pages/Classroom/routes/ClassroomStats'
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
                          '~components/pages/Classroom/routes/ClassroomTimetable'
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
                          '~components/pages/Classroom/routes/ClassroomRecordGrade'
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
                          '~components/pages/Classroom/routes/ClassroomPerformance'
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
                          '~components/pages/Subjects/widgets-subject/SubjectDetail'
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
                            '~components/pages/Subjects/widgets-subject/SubjectDetail/routes/SubjectTopics'
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
                            '~components/pages/Subjects/widgets-subject/SubjectDetail/routes/SubjectStaff'
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
                          '~components/pages/MyProfile/routes-myProfile/PersonalInfo'
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
                          '~components/pages/MyProfile/routes-myProfile/AcademicInfo'
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
                        import(
                          '~components/pages/MyProfile/routes-myProfile/ContactInfo'
                        )
                      }
                    />
                  }
                />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SaveLastRoute>
    </Router>
  );
}

export default AppRoutes;
