import { List, ListItem } from '~components/reusables/List/List';
import { capCharRemoveUnderscore } from '~utils';
import useGuardianDetail from '../../hooks-guardianDetail';
import Icon from '~assets/Icons';
import { guardianBiodataContent } from './utils-guardianBiodata';
import Photo from '~reusables/Photo';
import EmptyView from '~reusables/EmptyView';

const GuardianBiodata = () => {
  const { guardian, isError } = useGuardianDetail();
  const content = guardian ? guardianBiodataContent(guardian) : {};

  if (isError) return <EmptyView message="Unable to fetch Staff Details" />;
  return Object.keys(content).length ? (
    <>
      <div className="my-8 max-w-48">
        <Photo image={guardian?.picture} />
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

export default GuardianBiodata;
