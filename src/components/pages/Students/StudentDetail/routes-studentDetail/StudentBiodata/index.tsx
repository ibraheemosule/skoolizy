import { List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils';
import useStaffDetail from '../../hooks-studentDetail';
import Icon from '~assets/Icons';
import { studentBiodataContent } from './utils-studentBiodata';
import Photo from '~reusables/Photo';
import EmptyView from '~reusables/EmptyView';

const StaffBiodata = () => {
  const { student, isError } = useStaffDetail();
  const content = student ? studentBiodataContent(student) : {};

  if (isError) return <EmptyView message="Unable to fetch Staff Details" />;
  return Object.keys(content).length ? (
    <>
      <div className="my-8 max-w-48">
        <Photo image={student?.picture} />
      </div>
      <List>
        {Object.entries(content).map(([key, value]) => (
          <ListItem
            key={key}
            title={capCharRemoveUnderscore(key)}
            description={value as string}
          />
        ))}
      </List>
    </>
  ) : (
    <Icon
      name="spinner"
      height={40}
      width={40}
      fill="#432c81"
      style={{ margin: 'auto' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default StaffBiodata;
