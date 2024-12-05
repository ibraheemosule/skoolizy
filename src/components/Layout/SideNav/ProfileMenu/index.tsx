import { VerticalNav } from '~reusables/Menu';
import { logout } from '~utils';

const nav = [
  {
    label: 'My Profile',
    route: 'my-profile',
    icon: 'profile',
  } as const,
  {
    label: 'Settings',
    route: 'settings',
    icon: 'setting',
  } as const,
  {
    label: 'Sign out',
    action: logout,
    icon: 'exit',
  } as const,
];

const ProfileMenu = () => <VerticalNav title="More Options" nav={nav} />;

export default ProfileMenu;
