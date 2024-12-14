import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import Api from '~api';
import { TUserSignupPayload } from '~shared-ts-types/t-user-data';

const { api } = new Api();

export default function useProfileUpdate() {
  const queryClient = useQueryClient();
  const [info, setInfo] = useState<Record<string, string>>({});

  const { mutateAsync: updateAccount } = useMutation({
    mutationFn: (arg: Partial<TUserSignupPayload>) => api.updateAccount(arg),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });

  const updateValueFn = (key: string) => (v: string) => setInfo({ [key]: v });

  return {
    info,
    setInfo,
    updateAccount,
    updateValueFn,
  };
}
