import { memo } from 'react';
import image from 'src/assets/images/layout.png';

const BgImg = () => (
  <div className="fixed -z-10 grid inset-0 place-items-center">
    <img
      src={image}
      className=" aspect-square object-contain opacity-[0.02]"
      alt="school logo"
    />
  </div>
);

export default memo(BgImg);
