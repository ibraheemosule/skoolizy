export const capitalizeChar = (str: string) => {
  if (typeof str !== 'string' || !str) return '';
  const newStr = str.startsWith('/') ? str.slice(1) : str;
  const one = newStr.split(' ');
  return one
    .map(
      (char, i) =>
        (i > 0 ? ' ' : '') + char.charAt(0).toUpperCase() + char.slice(1)
    )
    .join('')
    .split('_')
    .map(
      (char, i) =>
        (i > 0 ? ' ' : '') + char.charAt(0).toUpperCase() + char.slice(1)
    )
    .join('');
};

export const test = {};
