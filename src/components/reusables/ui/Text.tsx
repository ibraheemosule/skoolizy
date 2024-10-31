import { memo } from 'react';
import { IBaseProp } from '~utils/shared-ts-types/react-types';

export const BaseText = memo(({ children, className }: IBaseProp) => (
  <p className={`${className}`}>{children}</p>
));
BaseText.displayName = 'BaseText';

export const BoldText = memo(({ children, className }: IBaseProp) => (
  <h2 className={`font-bold ${className}`}>{children}</h2>
));
BoldText.displayName = 'BoldText';

export const SmallText = memo(({ children, className }: IBaseProp) => (
  <h2 className={`text-sm ${className}`}>{children}</h2>
));
SmallText.displayName = 'SmallText';

export const MiniText = memo(({ children, className }: IBaseProp) => (
  <p className={`text-xs ${className}`}>{children}</p>
));
MiniText.displayName = 'MiniText';
