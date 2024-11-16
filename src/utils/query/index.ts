export const getPrevRoute = () => window.sessionStorage.getItem('lastRoute');

export const getUid = () => {
  const uid = () => Math.random().toString(32).slice(2);
  return uid() + uid() + uid();
};
