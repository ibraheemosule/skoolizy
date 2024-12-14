import { TStaff } from '~shared-ts-types/t-user-data';

const cap = (arg: string) => <span className="capitalize">{arg}</span>;

export const guardianBiodataContent = (arg: TStaff) => ({
  first_name: cap(arg.first_name),
  middle_name: cap(arg.middle_name || 'Not Provided'),
  last_name: cap(arg.last_name),
  gender: cap(arg.gender),
  Country: cap(arg.country),
  state_of_origin: cap(arg.state_of_origin),
});

export const tet = '';
