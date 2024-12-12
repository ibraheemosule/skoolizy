import { ChangeEvent, useState } from 'react';
import { userStore } from '~src/store';
import { personalInfoFn } from '../utils-personal-info';

export default function usePersonalInfo() {
  const user = userStore((state) => state);
  const [info, setInfo] = useState<Record<string, string>>({});
  const [image, setImage] = useState('');

  const handleUploadFn = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) setImage(URL.createObjectURL(e.target.files[0]));
  };

  const updateValueFn = (key: string) => (v: string) => setInfo({ [key]: v });

  return {
    personal: personalInfoFn(user),
    updateValueFn,
    info,
    setInfo,
    handleUploadFn,
    image,
  };
}
