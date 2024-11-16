import { memo } from 'react';
import { IconType } from '~src/shared-ts-types/react-types';

const AngleDownIcon = ({ color, size = 24 }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ height: size, width: size }}
    fill={color || 'currentColor'}
  >
    <path
      fillRule="evenodd"
      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default memo(AngleDownIcon);
