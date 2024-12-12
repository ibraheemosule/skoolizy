import { TUserStore } from '~src/store';
import { capCharRemoveUnderscore, formatDate } from '~utils';

export const personalInfoFn = (arg: TUserStore) => ({
  first_name: arg.firstName,
  middle_name: arg.middleName,
  last_name: arg.lastName,
  date_of_birth: arg.dateOfBirth && formatDate(arg.dateOfBirth).getDate,
  gender: capCharRemoveUnderscore(arg.gender),
  marital_status: 'Single',
  nationality: arg.nationality,
  state_of_origin: arg.state,
  local_government: 'Alimosho',
});

export const canEdit = ['marital_status', 'about', 'last_name'];

export const personalInfoDropdownEdit = {
  marital_status: ['single', 'married', 'divorced'],
};
