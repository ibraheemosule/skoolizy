import { memo, ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '~assets/images/logo.png';
import authStore from '~src/store/auth';

const allowed = [
  '/auth/signup',
  '/auth/login',
  '/auth/verify-account',
  '/auth/forgot-password',
];

const Auth = ({ children }: { children: ReactElement }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.from && !allowed.includes(location.state?.from)) {
      navigate(authStore.getState().token ? '/dashboard' : location.state?.to);
    }
  }, [allowed]);

  return (
    <section className="flex _full flex-wrap fixed inset-0 xlg:flex-nowrap overflow-auto xlg:overflow-hidden gap-6">
      <div className="w-full xlg:w-1/2 py-8 grid place-items-center overflow-auto">
        <div className="mx-auto w-full max-w-sm xlg:w-96">
          <img height={40} width={40} src={logo} alt="logo" />
          {children}
        </div>
      </div>

      <div className="hidden w-1/2 xlg:block">
        <img
          className="h-full w-full object-contain"
          src="https://res.cloudinary.com/ibraheemsulay/image/upload/v1703696961/wepik-export-202312262013541Fhh_itg0vo.png"
          alt="login"
        />
      </div>
    </section>
  );
};

export default memo(Auth);
