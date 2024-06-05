import { List, ListItem } from '~components/reusables/List/List';
import { capitalizeChar } from '~utils/format';

export const personal = {
  first_name: 'Tajudeen',
  middle_name: 'Giwa',
  last_name: 'Ayo',
  date_of_birth: '10 April, 2013',
  gender: 'Male',
  guardian: 'Mr. Olawale',
  class: 'JSS-1',
  'student id': '23015',
  nationality: 'Nigeria',
  state_of_origin: 'Lagos',
  local_goverment: 'Alimosho',
};

const Biodata = () => (
  <List>
    {Object.entries(personal).map(([key, value]) => (
      <ListItem key={key} title={capitalizeChar(key)} description={value} />
    ))}
  </List>
);

export default Biodata;
