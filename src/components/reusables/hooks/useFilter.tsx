import { useNavigate } from 'react-router-dom';

const useFilter = () => {
  const navigate = useNavigate();

  const url = new URL(window.location.href);

  const filter = (arg: { [key: string]: string }) => {
    Object.entries(arg).forEach(([key, value]) => {
      if (url.searchParams.get(key)) url.searchParams.delete(key);
      url.searchParams.append(key, value);
    });
    navigate(url.pathname + url.search, { replace: true, state: arg });
  };

  return { filter };
};

export default useFilter;
