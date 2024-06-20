type TFunc = () => void | (() => Promise<unknown>);

export const isFuncPromise = (fn: TFunc) =>
  ['new Promise', 'async', '.then', '.catch', 'resolve', 'reject'].some(
    (keyword) => fn.toString().includes(keyword)
  );

export const test = '';
