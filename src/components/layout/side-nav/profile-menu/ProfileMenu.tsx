import { memo } from 'react';
import Menu from 'components/reusables/menu/Menu';

const ProfileMenu = () => (
  <Menu>
    <Menu.Title>More Options</Menu.Title>
    <Menu.Wrapper>
      <Menu.Item link="/">My Profile</Menu.Item>
      <Menu.Item link="/">Settings</Menu.Item>
      <Menu.Item link="/">Sign out</Menu.Item>
    </Menu.Wrapper>
  </Menu>
);

export default memo(ProfileMenu);
