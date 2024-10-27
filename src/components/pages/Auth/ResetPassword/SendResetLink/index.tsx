import { memo, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import TextField from '~components/reusables/CustomField/TextField';
import { ActionBtn } from '~components/reusables/ui/Buttons';
import Api from '~api';

const { api } = new Api();

const SendResetLink = () => {
  const [tag, setTag] = useState('');

  const { mutateAsync, isPending, isSuccess } = useMutation({
    mutationFn: () => api.sendResetPasswordLink(tag),
  });

  return (
    <>
      <div className="mt-8">
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your password
        </h2>
        <p className="mt-2 leading-6 text-gray-500">
          A reset password link will be sent to the email associated the tag you
          provide below.
        </p>
      </div>

      {isSuccess ? (
        <h3 className="leading-8 text-xl mt-6 font-semibold text-brown.dark">
          A reset password link has been sent to {tag} email
        </h3>
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
