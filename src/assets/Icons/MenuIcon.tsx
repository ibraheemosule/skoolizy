import { memo } from 'react';
import { IconType } from '~utils/shared-ts-types/react-types';

const MenuIcon = ({ color, size = 24 }: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{ height: size, width: size }}
    fill={color || 'currentColor'}
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
      clipRule="evenodd"
    />
  </svg>
);

export default memo(MenuIcon);
