import { memo } from 'react';
import Menu from 'components/reusables/menu/Menu';

const navs = {
  dashboard: 'dashboard',
  requests: 'requests',
  teachers: 'teachers',
  students: 'students',
  classroom: 'classroom',
  subjects: 'subjects',
  highlights: 'highlights',
  records: 'records',
  announcements: 'announcements',
  'school information': 'school-information',
};

const PrimaryMenu = () => (
  <Menu>
    <Menu.Title>Main navigation</Menu.Title>
    <Menu.Wrapper>
      {Object.entries(navs).map(([key, obj]) => (
        <Menu.Item link={obj} key={Math.random()}>
          {key}
        </Menu.Item>
      ))}
      {/* <Menu.Item>Requests</Menu.Item>
      <Menu.Item>Teachers</Menu.Item>
      <Menu.Item>Students</Menu.Item>
      <Menu.Item>Classes</Menu.Item>
      <Menu.Item>Subjects</Menu.Item>
      <Menu.Item>Highlights</Menu.Item>
      <Menu.Item>Records</Menu.Item>
      <Menu.Item>Announcements</Menu.Item>
      <Menu.Item>School Information</Menu.Item> */}
    </Menu.Wrapper>
  </Menu>
);

export default memo(PrimaryMenu);
