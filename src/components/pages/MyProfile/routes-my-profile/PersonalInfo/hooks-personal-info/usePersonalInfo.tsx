import { useState } from 'react';
import { userStore } from '~src/store';
import { personalInfoFn } from '../utils-personal-info';
import { FileType } from '~shared-ts-types/react-types';
import useProfileUpdate from '~components/pages/MyProfile/hooks-my-profile/useProfileUpdate';

export default function usePersonalInfo() {
  const user = userStore((state) => state);
  const { info, setInfo, updateAccount, updateValueFn } = useProfileUpdate();

  const [image, setImage] = useState(user.picture);

  const handleUploadFn = async (arg: FileType) => {
    if (!arg) return;
    await updateAccount({ picture: arg });
    setImage(URL.createObjectURL(arg));
  };

  return {
    personal: personalInfoFn(user),
    updateValueFn,
    info,
    setInfo,
    handleUploadFn,
    image,
    updateAccount,
  };
}
