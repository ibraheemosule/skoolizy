import { useState } from 'react';
import UserCard from '~components/reusables/UserCard';
import UsersListLayout from '~components/reusables/UsersListLayout';
import StaffsOptions from './Options';
import DeleteStaff from './Options/Delete';

const people = new Array(30).fill({
  user: {
    name: 'Whitney Francis',
    url: 'test',
  },
  role: {
    name: 'Staff',
    url: '/Staffs/test',
  },
  rating: 4.5,
  imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  twitter: '#',
  linkedin: '#',
});
const Staffs = () => {
  const [deleteStaff, setDeleteStaff] = useState('');
  return (
    <>
      {deleteStaff && (
        <DeleteStaff
          staff={deleteStaff}
          closeModal={() => setDeleteStaff('')}
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
                      deleteAction={() => setDeleteStaff('staff')}
                    />
                  ))}
                </>
              }
              Filter={StaffsOptions}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Staffs;
