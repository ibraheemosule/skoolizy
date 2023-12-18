import { memo } from 'react';

const BgImg = () => (
  <div className="fixed -z-10 grid inset-0 place-items-center">
    <img
      src="src/assets/images/layout.png"
      className=" aspect-square object-contain opacity-[0.02]"
      alt="school logo"
    />
  </div>
);

export default memo(BgImg);
