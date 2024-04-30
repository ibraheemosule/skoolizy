import { memo, FC } from 'react';
import Star from '~src/assets/Icons/StarIcon';

const stars = Array(5).fill('');

interface IStarRatings {
  rating: number;
  onClick: (i: number) => void;
}

const StarRatings: FC<IStarRatings> = ({ rating, onClick }) => (
  <div className="flex gap-2">
    {stars.map((_, i) => (
      <button
        onClick={() => onClick(i + 1)}
        key={Math.random()}
        type="button"
        className="h-full"
      >
        <Star color={i + 1 <= rating ? '#432c81' : '#868686'} />
      </button>
    ))}
  </div>
);
export default memo(StarRatings);
