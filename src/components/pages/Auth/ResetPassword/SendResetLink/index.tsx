import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import TextField from '~components/reusables/CustomField/TextField';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Api from '~api';
import useBanner from '~components/reusables/hooks/useBanner';
import { TApiError } from '~shared-ts-types/t-api';

const { api } = new Api();

const SendResetLink = () => {
  const [tag, setTag] = useState('');
  const { banner } = useBanner();

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: () => api.sendResetPasswordLink(tag),
    onSuccess: () => {
      banner({
        type: 'success',
        text: 'A reset link has been sent to your email!',
      });
    },
    onError: (e: TApiError) => {
      banner({
        type: 'error',
        text: e.response?.data?.message,
      });
    },
  });

  return (
    <>
      <div className="mt-8">
        {!isSuccess && (
          <>
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Reset your password
            </h2>
            <p className="mt-2 leading-6 text-gray-500">
              A reset password link will be sent to the email associated the tag
              you provide below.
            </p>
            <p className="mt-2 text-gray-500 font-semibold">
              Remember your password?{' '}
              <Link
                aria-label="go back to login screen"
                className="text-purple.dark hover:text-purple"
                to="/auth/login"
              >
                Login here
              </Link>
            </p>
          </>
        )}
      </div>

      {isSuccess ? (
        <>
          <h3 className="leading-8 text-xl mt-6 font-semibold text-brown.dark">
            A reset password link has been sent to your email.{' '}
          </h3>
          <p className="text-gray-600 tracking-wide mt-3 font-extrabold">
            Link expires in 5 minutes
          </p>
        </>
      ) : (
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mt-6">
          <TextField
            id="tag"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Input your Tag"
          />
          <ActionBtn
            loading={isPending}
            onClick={async () => mutateAsync()}
            disabled={tag.length < 1}
          >
            Send reset password link
          </ActionBtn>
        </form>
      )}
    </>
  );
};

export default memo(SendResetLink);
