import { memo } from 'react';
import { IBaseProp } from '~src/shared-ts-types/react-types';

export const Heading1 = memo(({ children, className }: IBaseProp) => (
  <h1 className={`text-3xl font-bold ${className}`}>{children}</h1>
));
Heading1.displayName = 'Heading1';

export const Heading2 = memo(({ children, className }: IBaseProp) => (
  <h2 className={`text-2xl font-bold sm:text-3xl ${className}`}>{children}</h2>
));
Heading2.displayName = 'Heading2';
