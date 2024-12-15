import { useState } from 'react';
import { Heading2 } from '~reusables/ui/Heading';
import UserCard from '~reusables/UserCard';
import UsersListLayout from '~reusables/UsersListLayout';
import DeleteStudent from './widgets-allStudents/DeleteStudent';
import StudentsOptions from './widgets-allStudents/StudentOptions';
import useAllStudents from './hooks-allStudents';
import Icon from '~assets/Icons';

const AllStudents = () => {
  const { students, data } = useAllStudents();
  const [deleteStudent, setDeleteStudent] = useState('');
  return (
    <>
      {deleteStudent && (
        <DeleteStudent
          student={deleteStudent}
          closeModal={() => setDeleteStudent('')}
        />
      )}
      <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
        <div className="w-full min-h-full shrink-0">
          <Heading2 className="capitalize text-center">
            Meet our Students
          </Heading2>
          <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden mt-6">
            {students ? (
              <UsersListLayout
                List={
                  <>
                    {students.map((student) => (
                      <UserCard
                        key={student.tag}
                        user={{
                          name: `${student.first_name} ${student.last_name}`,
                          url: `/students/${student.tag}`,
                        }}
                        role={{
                          name: student.group.slice(0, -1),
                          url: '/students',
                        }}
                        rating={4}
                        imageSrc={student.picture}
                        deleteAction={() => setDeleteStudent('delete')}
                      />
                    ))}
                  </>
                }
                Filter={
                  <StudentsOptions
                    page={data?.page}
                    total_items={data?.total_items}
                    total_pages={data?.total_pages}
                  />
                }
              />
            ) : (
              <Icon
                name="spinner"
                height={40}
                width={40}
                fill="#432c81"
                style={{ margin: 'auto' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllStudents;
