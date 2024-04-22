import { memo } from 'react';
import { IconType } from 'src/ts-types/react-types';

const CancelIcon = ({
  color,
  height,
  width,
  stroke,
  strokeWidth,
}: IconType) => (
  <svg
    viewBox="0 0 24 24"
    height={height || 24}
    width={width || 24}
    fill={color || 'none'}
    stroke={stroke || 'currentColor'}
    strokeWidth={strokeWidth || 1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
);

export default memo(CancelIcon);
