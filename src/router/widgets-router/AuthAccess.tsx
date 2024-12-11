import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { globalStore } from '~src/store';

const AuthAccess: FC = () => {
  const { token } = globalStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth/login');
  }, [token]);

  return <Outlet />;
};

export default AuthAccess;
