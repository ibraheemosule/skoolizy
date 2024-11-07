import { memo, ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '~assets/images/logo.png';
import useBanner from '~components/reusables/hooks/useBanner';
import authStore from '~src/store/auth';
import { getPrevRoute } from '~utils/query';

const allowed = [
  '/auth/signup',
  '/auth/login',
  '/auth/verify-account',
  '/auth/reset-password',
];

const Auth = ({ children }: { children: ReactElement }) => {
  const navigate = useNavigate();
  const { banner } = useBanner();

  useEffect(() => {
    if (authStore.getState().token) {
      navigate('/dashboard');
      return;
    }

    const prevRoute = getPrevRoute();
    if (!prevRoute) return;
    if (allowed.includes(prevRoute)) return;

    banner({
      type: 'success',
      timeout: 4,
      text: 'You have successfully logged out!',
    });
  }, []);

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
