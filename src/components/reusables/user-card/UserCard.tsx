import { FC, ReactElement, memo } from 'react';
import TwitterIcon from 'src/assets/icons/TwitterIcon';
import LinkedinIcon from 'src/assets/icons/LinkedinIcon';
import { NavLink } from 'react-router-dom';
import { BoldText, SmallText } from '../ui/text';

const iconList = {
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
} as Record<string, FC>;

const UserCard = ({ children }: { children: ReactElement }) => (
  <li className="max-w-[10rem]">{children}</li>
);

const Image = memo(({ src }: { src: string }) => (
  <img
    className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full"
    src={src}
    alt=""
  />
));
Image.displayName = 'Image';

const User = memo(
  ({
    user,
    role,
    children,
  }: {
    user: string;
    role: string;
    children?: ReactElement;
  }) => (
    <>
      <BoldText className="text-gray-500 mt-6 leading-7 tracking-tight">
        <NavLink to="/" className="hover:text-purple.dark">
          {user}
        </NavLink>
      </BoldText>

      <SmallText>{role}</SmallText>
      {children ? (
        <div className="mt-3 flex justify-center gap-x-6">{children}</div>
      ) : null}
    </>
  )
);
User.displayName = 'User';

const Icon = memo(({ url, name }: { name: string; url: string }) => {
  const El = iconList[name.toLowerCase()];
  return (
    <a
      href={url}
      target="_blank"
      className="text-gray-400 hover:text-gray-500"
      rel="noreferrer"
    >
      <span className="sr-only">{name}</span>
      <El />
    </a>
  );
});
Icon.displayName = 'Icon';

UserCard.Image = Image;
UserCard.User = User;
UserCard.Icon = Icon;

export default UserCard;

// {people.map((person) => (
//     <li key={Math.random()}>
//       <UserCard>
//         <>
//           <UserCard.Image src={person.imageUrl} />
//           <UserCard.User user={person.name} role={person.role}>
//             <UserCard.Icon url={person.twitter} name="Twitter" />
//           </UserCard.User>
//         </>
//       </UserCard>
//     </li>
//   ))}
