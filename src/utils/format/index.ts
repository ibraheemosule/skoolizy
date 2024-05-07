export const capitalizeChar = (str: string) => {
  if (typeof str !== 'string' || !str) return '';
  return str
    .replace(/ /g, '_')
    .split('_')
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1))
    .join(' ');
};

export const formatDate = (str: string) => {
  const newDate = new Date(str);
  const getDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  const hour = newDate.getUTCHours();
  const minute = `:${newDate.getUTCMinutes()}`;
  const getTime = `${hour > 12 ? hour - 12 : hour < 1 ? 12 : hour}${minute}${
    hour > 11 ? 'pm' : 'am'
  }`;
  return { getDate, getTime };
};
