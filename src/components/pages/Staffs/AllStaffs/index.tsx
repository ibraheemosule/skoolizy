import { useState } from 'react';
import { Heading2 } from '~reusables/ui/Heading';
import UserCard from '~reusables/UserCard';
import UsersListLayout from '~reusables/UsersListLayout';
import DeleteStaff from './widgets-allStaffs/DeleteStaff';
import StaffsOptions from './widgets-allStaffs/StaffOptions';
import useAllStaffs from './hooks-allStaffs';
import Icon from '~assets/Icons';

const AllStaffs = () => {
  const { staffs, data } = useAllStaffs();
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
            {staffs ? (
              <UsersListLayout
                List={
                  <>
                    {staffs.map((staff) => (
                      <UserCard
                        key={staff.tag}
                        user={{
                          name: `${staff.first_name} ${staff.last_name}`,
                          url: `/staffs/${staff.tag}`,
                        }}
                        role={{
                          name: staff.group.slice(0, -1),
                          url: '/staffs',
                        }}
                        rating={4}
                        imageSrc={staff.picture}
                        deleteAction={() => setDeleteStaff('delete')}
                      />
                    ))}
                  </>
                }
                Filter={
                  <StaffsOptions
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

export default AllStaffs;
