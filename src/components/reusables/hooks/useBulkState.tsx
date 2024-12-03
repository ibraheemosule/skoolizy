import { Dispatch, useReducer } from 'react';

const useBulkState = <T,>(
  initialState: T
): [T, Dispatch<Partial<T & { resetBulkState: true }>>] => {
  const [state, setState] = useReducer(
    (state: T, newState: Partial<T>) =>
      'resetBulkState' in newState ? ({} as T) : { ...state, ...newState },
    initialState
  );

  return [state, setState];
};

export default useBulkState;
