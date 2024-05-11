import { useState } from 'react';
import UsersListLayout from '~components/reusables/UsersListLayout';
import TeachersOptions from './Options';
import DeleteTeacher from './Options/Delete';
import Icon from '~assets/Icons';
import UserCard from '~components/reusables/UserCard';
import { BaseBtn } from '~components/reusables/ui/Buttons';

const people = new Array(30).fill({
  name: 'Whitney Francis',
  role: 'Teacher',
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
                      user={person.name}
                      role={person.role}
                      rating={person.rating}
                      imageSrc={person.imageUrl}
                    >
                      <BaseBtn onClick={() => setDeleteTeacher('teacher')}>
                        <Icon name="trash" height={16} width={16} />
                      </BaseBtn>
                    </UserCard>
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
