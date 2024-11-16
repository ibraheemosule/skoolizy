import { useNavigate, useLocation } from 'react-router-dom';

const useFilter = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const url = new URL(window.location.href);

  const filter = (arg: { [key: string]: string | number }) => {
    const obj = {
      ...state,
      ...arg,
      ...(Object.keys(arg).length > 1 && { page: 0 }),
    };

    let newState = {};

    Object.entries(obj).forEach(([key, value]) => {
      if (url.searchParams.get(key)) url.searchParams.delete(key);
      if (value) {
        url.searchParams.append(key, String(value));
        newState = {
          ...newState,
          [key]: value,
        };
      }
    });
    navigate(url.pathname + url.search, {
      replace: true,
      state: newState,
    });
  };

  return filter;
};

export default useFilter;
