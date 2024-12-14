type TFunc<T = unknown> = (arg?: T) => void | ((arg?: T) => Promise<unknown>);

export const isFuncPromise = <T,>(fn: TFunc<T>) =>
  ['new Promise', 'async', '.then', '.catch', 'resolve', 'reject'].some(
    (keyword) => fn.toString().includes(keyword)
  );

export const test = '';
