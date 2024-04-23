import { memo } from 'react';
import Menu from 'components/reusables/menu';

const navs = {
  dashboard: 'dashboard',
  requests: 'requests',
  teachers: 'teachers',
  students: 'students',
  classroom: 'classroom',
  subjects: 'subjects',
  highlights: 'highlights',
  'record grade': 'record-grade',
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
    </Menu.Wrapper>
  </Menu>
);

export default memo(PrimaryMenu);
