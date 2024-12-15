import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { BoldText, SmallText } from '../ui/Text';
import Icon from '~assets/Icons';
import { BaseBtn } from '../ui/Buttons';
import Photo from '~reusables/Photo';
import StarRating from '~reusables/StarRating';

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
    <li className=" max-w-xs text-center">
      <Photo image={imageSrc || ''} />

      <BoldText className="text-gray-500 mt-6 leading-7 tracking-tight capitalize">
        <NavLink to={user.url} className=" hover:text-purple.dark">
          {user.name}
        </NavLink>
      </BoldText>

      {role && (
        <SmallText>
          <NavLink to={role.url} className="hover:text-purple.dark capitalize">
            {role.name}
          </NavLink>
        </SmallText>
      )}

      {rating && (
        <div className="flex justify-center mt-2">
          <StarRating rating={4} />
        </div>
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
