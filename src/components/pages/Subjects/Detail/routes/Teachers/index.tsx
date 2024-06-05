import { useState } from 'react';
import UsersListLayout from '~components/reusables/UsersListLayout';
import TeachersOptions from './Options';
import DeleteTeacher from './Options/Delete';
import UserCard from '~components/reusables/UserCard';

const people = new Array(30).fill({
  user: {
    name: 'Whitney Francis',
    url: 'test',
  },
  role: {
    name: 'Teacher',
    url: '/teachers/test',
  },
  rating: 4.5,
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  twitter: '#',
  linkedin: '#',
});
const Teachers = () => {
  const [deleteTeacher, setDeleteTeacher] = useState('');
  return (
    <>
      {deleteTeacher && (
        <DeleteTeacher
          teacher={deleteTeacher}
          closeModal={() => setDeleteTeacher('')}
        />
      )}
      <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
        <div className="w-full min-h-full shrink-0">
          <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden">
            <UsersListLayout
              List={
                <>
                  {people.map((person) => (
                    <UserCard
                      key={Math.random()}
                      user={person.user}
                      role={person.role}
                      rating={person.rating}
                      imageSrc={person.imageUrl}
                      deleteAction={() => setDeleteTeacher('teacher')}
                    />
                  ))}
                </>
              }
              Filter={TeachersOptions}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Teachers;
