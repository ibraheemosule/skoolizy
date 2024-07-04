export const capitalizeChar = (str: string) => {
  if (typeof str !== 'string' || !str) return '';
  return str
    .replace(/ /g, '_')
    .split('_')
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(' ');
};

export const formatDate = (str: string = '') => {
  let newDate: Date;
  if (new Date(str).toString() === 'Invalid Date') newDate = new Date();
  else newDate = new Date(str.length === 19 ? `${str}Z` : str);

  const getDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  const hour = newDate.getHours();
  const minute = `${newDate.getMinutes()}`;
  const getTime = `${hour > 12 ? hour - 12 : hour < 1 ? 12 : hour}:${
    +minute < 10 ? `0${minute}` : minute
  }${hour > 11 ? 'pm' : 'am'}`;
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
