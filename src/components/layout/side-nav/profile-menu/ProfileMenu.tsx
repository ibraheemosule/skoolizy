import { memo } from 'react';
import Menu from 'components/reusables/menu/Menu';

const ProfileMenu = () => (
  <Menu>
    <Menu.Title>More Options</Menu.Title>
    <Menu.Wrapper>
      <Menu.Item>My Profile</Menu.Item>
      <Menu.Item>Settings</Menu.Item>
      <Menu.Item>Sign out</Menu.Item>
    </Menu.Wrapper>
  </Menu>
);

export default memo(ProfileMenu);
