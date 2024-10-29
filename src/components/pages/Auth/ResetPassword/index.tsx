import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import SendResetLink from './SendResetLink';
import CreateNewPassword from './CreateNewPassword';
import Auth from '..';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  return (
    <Auth>
      {token && token?.length > 100 ? (
        <CreateNewPassword token={token} />
      ) : (
        <SendResetLink />
      )}
    </Auth>
  );
};

export default memo(ResetPassword);
