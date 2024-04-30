import { VerticalNav } from '~reusables/menu';

const nav = [
  {
    label: 'My Profile',
    route: 'my-profile',
    icon: 'paper',
  } as const,
  {
    label: 'Settings',
    route: '/',
    icon: 'paper',
  } as const,
  {
    label: 'Sign out',
    route: '/',
    icon: 'paper',
  } as const,
];

const ProfileMenu = () => <VerticalNav title="More Options" nav={nav} />;

export default ProfileMenu;
