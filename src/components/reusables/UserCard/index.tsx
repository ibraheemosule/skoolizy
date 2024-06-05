import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BoldText, SmallText } from '../ui/Text';
import Icon from '~assets/Icons';
import { BaseBtn } from '../ui/Buttons';

type TUserCard = {
  user: {
    name: string;
    url: string;
  };
  role?: {
    name: string;
    url: string;
  };
  rating?: number;
  imageSrc?: string;
  deleteAction?: () => void;
};

const UserCard = memo(
  ({ user, role, rating, imageSrc, deleteAction }: TUserCard) => (
    <li className="max-w-[10rem] text-center">
      {imageSrc && (
        <img
          className="mx-auto h-32 w-32 md:h-40 md:w-40 bg-gray-200 rounded-full"
          src={imageSrc}
          alt=""
        />
      )}
      <BoldText className="text-gray-500 mt-6 leading-7 tracking-tight">
        <NavLink to={user.url} className=" hover:text-purple.dark">
          {user.name}
        </NavLink>
      </BoldText>

      {role && (
        <SmallText>
          <NavLink to={role.url} className="hover:text-purple.dark">
            {role.name}
          </NavLink>
        </SmallText>
      )}

      {rating && (
        <SmallText className="font-semibold text-gray-500  mt-1">
          {rating} Rating
        </SmallText>
      )}
      {deleteAction && (
        <div className="mt-3 flex justify-center gap-x-6">
          <BaseBtn onClick={deleteAction}>
            <Icon name="trash" height={16} width={16} />
          </BaseBtn>
        </div>
      )}
    </li>
  )
);
UserCard.displayName = 'UserCard';

export default UserCard;
