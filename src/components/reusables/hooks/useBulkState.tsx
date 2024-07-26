import { Dispatch, useReducer } from 'react';

const useBulkState = <T,>(initialState: T): [T, Dispatch<Partial<T>>] => {
  const [state, setState] = useReducer(
    (state: T, newState: Partial<T>) => ({ ...state, ...newState }),
    initialState
  );

  return [state, setState];
};

export default useBulkState;
