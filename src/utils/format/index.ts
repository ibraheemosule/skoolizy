export const phoneNumberFormats = ['234', '80', '70', '81', '90', '91'];

export const onlyAlphabet = (text: string) => {
  const re = /^[a-zA-Z ]+$/;
  if (text.match(re)) return true;
  return false;
};

// export const capCharRemoveUnderscore = (str: string) => {
//   if (typeof str !== 'string' || !str) return '';
//   return str
//     .replace(/ /g, '_')
//     .split('_')
//     .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
//     .join(' ');
// };

export const capCharRemoveUnderscore = (str: string) => {
  if (typeof str !== 'string' || !str) return '';
  return str
    .replace(/ /g, '_')
    .split('_')
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(' ');
};

export const formatDate = (str: string = '', format = 12) => {
  let newDate: Date;
  if (!str || new Date(str).toString() === 'Invalid Date') newDate = new Date();
  else newDate = new Date(str);

  const getDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;

  const hour = String(newDate.getHours()).padStart(2, '0');
  const minute = String(newDate.getMinutes()).padStart(2, '0');
  let getTime = `${String(hour).padStart(2, '0')}:${minute.padStart(
    2,
    '0'
  )}:00`;

  if (format === 12) {
    getTime = `${
      +hour > 12 ? String(+hour - 12).padStart(2, '0') : +hour < 1 ? 12 : hour
    }:${minute}${+hour > 11 ? 'pm' : 'am'}`;
  }
  return { getDate, getTime };
};

export const dateToDbFormat = (date: Date | null) => {
  if (!date) return date;
  return date
    .toLocaleDateString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .split('/')
    .join('-');
};

export const onlyNumericInput = (str: string) => str.replace(/[^0-9]/g, '');
