import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import authStore from '~src/store/auth';

const AuthAccess: FC = () => {
  const { token } = authStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth/login');
  }, [token]);

  return <Outlet />;
};

export default AuthAccess;
