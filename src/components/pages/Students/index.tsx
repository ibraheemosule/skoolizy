import { useState } from 'react';
import UsersListLayout from '~reusables/UsersListLayout';
import StudentsFilter from './Options';
import { Heading2 } from '~reusables/ui/Heading';
import AsideAdmin from '~components/Layout/AsideAdmin';
import UserCard from '~reusables/UserCard';
import DeleteStudent from './Options/Delete';

const people = new Array(30).fill({
  name: 'Whitney Francis',
  role: 'Student',
  rating: 4.5,
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  twitter: '#',
  linkedin: '#',
});

const Teachers = () => {
  const [deleteStudent, setDeleteStudent] = useState('');
  return (
    <>
      {deleteStudent && (
        <DeleteStudent
          student={deleteStudent}
          closeModal={() => setDeleteStudent('')}
        />
      )}
      <section className="flex  _full flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
        <div className="w-full min-h-full lg:w-3/5 xl:w-8/12 shrink-0">
          <Heading2 className="capitalize text-center">
            Meet our Students
          </Heading2>
          <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden mt-6">
            <UsersListLayout
              List={
                <>
                  {people.map((person) => (
                    <UserCard
                      key={Math.random()}
                      user={person.name}
                      role={person.role}
                      rating={person.rating}
                      imageSrc={person.imageUrl}
                      deleteAction={() => setDeleteStudent('delete')}
                    />
                  ))}
                </>
              }
              Filter={StudentsFilter}
            />
          </div>
        </div>

        <div className="w-full hidden xlg:block lg:w-auto grow overflow-auto">
          <AsideAdmin />
        </div>
      </section>
    </>
  );
};

export default Teachers;
