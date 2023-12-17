import { memo } from 'react';
import Menu from 'components/reusables/menu/Menu';

const ProfileMenu = () => (
  <Menu>
    <Menu.Title>Profile Menu</Menu.Title>
    <Menu.Wrapper>
      <Menu.Item>Menu item here</Menu.Item>
      <Menu.Item>Menu item here</Menu.Item>
      <Menu.Item>Menu item here</Menu.Item>
      <Menu.Item>Menu item here</Menu.Item>
      <Menu.Item>Menu item here</Menu.Item>
    </Menu.Wrapper>
  </Menu>
);

export default memo(ProfileMenu);
