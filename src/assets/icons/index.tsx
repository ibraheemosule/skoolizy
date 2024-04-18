import { SVGAttributes } from 'react';
import { IconNames } from './IconNames';

type TIcon = SVGAttributes<SVGElement>;

const icons: {
  [key in IconNames]: (prop: TIcon) => JSX.Element;
} = {
  cancel: ({ color, height, width, stroke, strokeWidth }) => (
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
  ),
  filter: ({
    strokeWidth = 2,
    stroke = 'currentColor',
    height = 24,
    width = 24,
  }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      height={height}
      width={width}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
      />
    </svg>
  ),
};

const Icon = ({ name, ...props }: TIcon & { name: IconNames }) =>
  icons[name](props) ?? null;
export default Icon;
