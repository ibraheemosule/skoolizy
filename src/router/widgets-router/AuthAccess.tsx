import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import authStore from '~src/store/authStore';
import userStore from '~src/store/userStore';

const AuthAccess: FC = () => {
  const { token } = authStore((state) => state);
  const { verified } = userStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate('/auth/login');
    else if (!verified) navigate('/auth/verify-account');
  }, [token]);

  return <Outlet />;
};

export default AuthAccess;
