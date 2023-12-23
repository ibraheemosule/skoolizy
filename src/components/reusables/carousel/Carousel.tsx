import {
  ReactElement,
  memo,
  Children,
  cloneElement,
  isValidElement,
} from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Carousel = ({ children }: { children: ReactElement }) => {
  const renderChildren = () =>
    (children.props.children || [children]).map((child: ReactElement) =>
      Children.map(child, (innerChild) => {
        if (isValidElement(child)) {
          return cloneElement(innerChild);
        }
        return child;
      })
    );

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      animationType="fadeout"
      disableDotsControls
      keyboardNavigation
      infinite
    >
      {renderChildren()}
    </AliceCarousel>
  );
};

export default memo(Carousel);
