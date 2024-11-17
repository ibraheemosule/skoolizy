import { ReactElement, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const SaveLastRoute = ({ children }: { children: ReactElement }) => {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current !== pathname) {
      setTimeout(() => sessionStorage.setItem('lastRoute', pathname), 10);
      previousPath.current = pathname;
    }
  }, [pathname]);

  return children;
};

export default SaveLastRoute;
