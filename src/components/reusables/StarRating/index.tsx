import { memo, FC } from 'react';
import Icon from '~assets/Icons';

const stars = Array(5).fill('');

interface IStarRatings {
  rating: number;
  onClick?: (i: number) => void;
}

const StarRatings: FC<IStarRatings> = ({ rating, onClick }) => (
  <div className="flex gap-2 shrink-0">
    {stars.map((_, i) => {
      const offset = rating >= i + 1 ? 100 : (rating - i) * 100;
      return (
        <button
          onClick={() => onClick?.(i + 1)}
          key={Math.random()}
          type="button"
          className="h-full"
        >
          <Icon name="star" offset={offset} />
        </button>
      );
    })}
  </div>
);
export default memo(StarRatings);
