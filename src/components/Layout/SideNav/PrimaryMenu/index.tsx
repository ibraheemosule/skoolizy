import { VerticalNav } from '~reusables/Menu';

const navs = [
  {
    label: 'dashboard',
    route: 'dashboard',
    icon: 'monitor',
  } as const,
  {
    label: 'announcements',
    route: 'announcements',
    icon: 'speaker',
  } as const,
  {
    label: 'feeds',
    route: 'feeds',
    icon: 'newspaper',
  } as const,
  {
    label: 'requests',
    route: 'requests',
    icon: 'edit-list',
  } as const,
  {
    label: 'students',
    route: 'students',
    icon: 'user',
  } as const,
  {
    label: 'teachers',
    route: 'teachers',
    icon: 'tutor',
  } as const,
  {
    label: 'classroom',
    route: 'classroom',
    icon: 'classroom',
  } as const,
  {
    label: 'subjects',
    route: 'subjects',
    icon: 'books',
  } as const,
  {
    label: 'media',
    route: 'media',
    icon: 'photo',
  } as const,
];

const PrimaryMenu = () => <VerticalNav title="Main Navigation" nav={navs} />;

export default PrimaryMenu;
