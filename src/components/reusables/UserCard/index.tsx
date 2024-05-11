import { ReactElement, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BoldText, SmallText } from '../ui/Text';

type TUserCard = {
  user: string;
  role?: string;
  children?: ReactElement;
  rating?: number;
  imageSrc?: string;
};

const UserCard = memo(
  ({ user, role, children, rating, imageSrc }: TUserCard) => (
    <li className="max-w-[10rem] text-center">
      {imageSrc && (
        <img
          className="mx-auto h-32 w-32 md:h-40 md:w-40 bg-gray-200 rounded-full"
          src={imageSrc}
          alt=""
        />
      )}
      <BoldText className="text-gray-500 mt-6 leading-7 tracking-tight">
        <NavLink to="/" className=" hover:text-purple.dark">
          {user}
        </NavLink>
      </BoldText>

      {role && (
        <SmallText>
          <NavLink to="/" className="hover:text-purple.dark">
            {role}
          </NavLink>
        </SmallText>
      )}

      {rating && (
        <SmallText className="font-semibold text-gray-500  mt-1">
          {rating} Rating
        </SmallText>
      )}
      {children && (
        <div className="mt-3 flex justify-center gap-x-6">{children}</div>
      )}
    </li>
  )
);
UserCard.displayName = 'UserCard';

export default UserCard;
