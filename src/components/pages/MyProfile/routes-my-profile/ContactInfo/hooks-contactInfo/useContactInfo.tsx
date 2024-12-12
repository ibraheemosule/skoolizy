import { useState } from 'react';
import { userStore } from '~src/store';
import { contactInfoFn } from '../utils-contact-info';

export default function useContactInfo() {
  const user = userStore((state) => state);

  const [info, setInfo] = useState<Record<string, string>>({});

  const updateValueFn = (key: string) => (v: string) => setInfo({ [key]: v });

  return { contact: contactInfoFn(user), updateValueFn, info, setInfo };
}
