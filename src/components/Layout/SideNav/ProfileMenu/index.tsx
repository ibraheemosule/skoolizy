import { VerticalNav } from '~reusables/Menu';

const nav = [
  {
    label: 'My Profile',
    route: 'my-profile',
    icon: 'paper',
  } as const,
  {
    label: 'Settings',
    route: 'settings',
    icon: 'paper',
  } as const,
  {
    label: 'Sign out',
    action: () => null,
    icon: 'paper',
  } as const,
];

const ProfileMenu = () => <VerticalNav title="More Options" nav={nav} />;

export default ProfileMenu;
