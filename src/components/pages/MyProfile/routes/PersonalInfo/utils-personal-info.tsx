import userStore from '~src/store/user';
import { capCharRemoveUnderscore, formatDate } from '~utils/format';

const {
  firstName,
  nationality,
  gender,
  state,
  dateOfBirth,
  lastName,
  middleName,
} = userStore.getState();

export const personal = {
  first_name: firstName,
  middle_name: middleName,
  last_name: lastName,
  date_of_birth: formatDate(dateOfBirth).getDate,
  gender: capCharRemoveUnderscore(gender),
  marital_status: 'Single',
  nationality,
  state_of_origin: state,
  local_government: 'Alimosho',
};

export const canEdit = ['marital_status', 'about', 'last_name'];

export const personalInfoDropdownEdit = {
  marital_status: ['single', 'married', 'divorced'],
};
