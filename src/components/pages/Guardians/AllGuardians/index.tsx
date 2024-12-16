import { useState } from 'react';
import { Heading2 } from '~reusables/ui/Heading';
import UserCard from '~reusables/UserCard';
import UsersListLayout from '~reusables/UsersListLayout';
import DeleteGuardian from './widgets-allGuardians/DeleteGuardian';
import GuardiansOptions from './widgets-allGuardians/GuardiansOptions';
import useAllGuardians from './hooks-allGuardians';
import Icon from '~assets/Icons';
import EmptyView from '~reusables/EmptyView';

const AllGuardians = () => {
  const { guardians, data, isError, isFetching } = useAllGuardians();
  const [deleteGuardian, setDeleteGuardian] = useState('');
  return (
    <>
      {deleteGuardian && (
        <DeleteGuardian
          guardian={deleteGuardian}
          closeModal={() => setDeleteGuardian('')}
        />
      )}
      <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
        <div className="w-full min-h-full shrink-0">
          <Heading2 className="capitalize text-center">
            Meet our Guardians
          </Heading2>
          <div className="flex mx-auto text-center flex-col md:h-full md:overflow-hidden mt-6">
            {isFetching ? (
              <Icon
                name="spinner"
                height={40}
                width={40}
                fill="#432c81"
                style={{ margin: 'auto' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            ) : guardians?.length ? (
              <UsersListLayout
                List={
                  <>
                    {guardians.map((guardian) => (
                      <UserCard
                        key={guardian.tag}
                        user={{
                          name: `${guardian.first_name} ${guardian.last_name}`,
                          url: `/guardians/${guardian.tag}`,
                        }}
                        role={{
                          name: guardian.group.slice(0, -1),
                          url: '/guardians',
                        }}
                        rating={4}
                        imageSrc={guardian.picture}
                        deleteAction={() => setDeleteGuardian('delete')}
                      />
                    ))}
                  </>
                }
                Filter={
                  <GuardiansOptions
                    page={data?.page}
                    total_items={data?.total_items}
                    total_pages={data?.total_pages}
                  />
                }
              />
            ) : guardians ? (
              <EmptyView message="No guardians is registered to this school yet" />
            ) : isError ? (
              <EmptyView />
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllGuardians;
