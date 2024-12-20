import { ReactElement, memo } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => (
  <AliceCarousel
    autoPlay
    autoPlayInterval={2000}
    animationType="fadeout"
    keyboardNavigation
    infinite
    disableButtonsControls
  >
    {children}
  </AliceCarousel>
);
export default memo(Carousel);
