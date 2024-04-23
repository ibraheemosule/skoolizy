import { memo } from 'react';
import { IBaseProp } from 'src/ts-types/react-types';

export const Circle = memo(
  ({ children, className, size }: IBaseProp & { size: string }) => (
    <div
      style={{ width: `${size}px`, paddingTop: `${size}px` }}
      className={`relative overflow-hidden rounded-full ${className}`}
    >
      <div className="absolute inset-0 grid place-items-center">{children}</div>
    </div>
  )
);
Circle.displayName = 'Circle';

export const Card = memo(({ children, className }: IBaseProp) => (
  <div className={`rounded-xl ${className}`}>{children}</div>
));
Card.displayName = 'Card';

export const Tag = memo(
  ({ children, onClick }: IBaseProp & { onClick?: () => void }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
      className="bg-purple.light text-brown.dark p-.5 px-2 rounded-lg"
    >
      {children}
    </button>
  )
);

Tag.displayName = 'Tag';
