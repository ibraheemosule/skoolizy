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
  const date = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
  const hour = newDate.getUTCHours();
  const minute = `:${newDate.getUTCMinutes()}`;
  const newTime = `${hour > 12 ? hour - 12 : hour < 1 ? 12 : hour}${minute}${
    hour > 11 ? 'pm' : 'am'
  }`;
  return { getDate: date, getTime: newTime };
};
