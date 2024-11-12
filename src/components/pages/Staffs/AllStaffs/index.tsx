import { useState } from 'react';
import { Heading2 } from '~reusables/ui/Heading';
import UserCard from '~reusables/UserCard';
import UsersListLayout from '~reusables/UsersListLayout';
import DeleteStaff from '../DeleteStaff';
import StaffsOptions from './Options';

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

const AllStaffs = () => {
  const [deleteStaff, setDeleteStaff] = useState('');
  return (
    <>
      {deleteStaff && (
        <DeleteStaff
          staff={deleteStaff}
          closeModal={() => setDeleteStaff('')}
        />
      )}
      <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
        <div className="w-full min-h-full shrink-0">
          <Heading2 className="capitalize text-center">
            Meet our Staffs
          </Heading2>
          <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden mt-6">
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
                      deleteAction={() => setDeleteStaff('delete')}
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

export default AllStaffs;
