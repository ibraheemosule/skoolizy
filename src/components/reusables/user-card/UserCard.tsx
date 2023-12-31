import { FC, ReactElement, memo } from 'react';
import TwitterIcon from 'src/assets/icons/TwitterIcon';
import LinkedinIcon from 'src/assets/icons/LinkedinIcon';

const iconList = {
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
} as Record<string, FC>;

const UserCard = ({ children }: { children: ReactElement }) => (
  <li>{children}</li>
);

const Image = memo(({ src }: { src: string }) => (
  <img
    className="mx-auto h-32 w-32 md:h-48 md:w-48  rounded-full"
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
      <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight">
        {user}
      </h3>
      <p className="text-sm leading-6 text-gray-600">{role}</p>
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
