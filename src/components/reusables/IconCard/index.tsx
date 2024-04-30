import { memo } from 'react';
import { Circle, Card } from '~reusables/ui/Others';
import { IBaseProp } from '~ts-types/react-types';

const IconCard = ({ children, className }: IBaseProp) => (
  <Card className={`p-3 grow md:grow-0 ${className}`}>{children}</Card>
);

const Wrapper = memo(({ children }: IBaseProp) => (
  <div className="flex gap-1 justify-between items-center">{children}</div>
));
Wrapper.displayName = 'Wrapper';

const Icon = memo(
  ({ children, size, className }: IBaseProp & { size: string }) => (
    <Circle size={size} className={`bg-white shrink-0 ${className}`}>
      {children}
    </Circle>
  )
);
Icon.displayName = 'Icon';

const IconInfo = memo(({ children, className }: IBaseProp) => (
  <div className={`flex gap-1 items-center ${className}`}>{children}</div>
));
IconInfo.displayName = 'IconInfo';

const Content = memo(({ children, className }: IBaseProp) => (
  <div className={className}>{children}</div>
));
Content.displayName = 'Content';

IconCard.Wrapper = Wrapper;
IconCard.Icon = Icon;
IconCard.IconInfo = IconInfo;
IconCard.Content = Content;

export default IconCard;
