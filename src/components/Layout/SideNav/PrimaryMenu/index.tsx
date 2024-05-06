import { VerticalNav } from '~reusables/Menu';

const navs = [
  {
    label: 'dashboard',
    route: 'dashboard',
    icon: 'paper',
  } as const,
  {
    label: 'announcements',
    route: 'announcements',
    icon: 'paper',
  } as const,
  {
    label: 'feeds',
    route: 'feeds',
    icon: 'paper',
  } as const,
  {
    label: 'requests',
    route: 'requests',
    icon: 'paper',
  } as const,
  {
    label: 'students',
    route: 'students',
    icon: 'paper',
  } as const,
  {
    label: 'teachers',
    route: 'teachers',
    icon: 'paper',
  } as const,
  {
    label: 'classroom',
    route: 'classroom',
    icon: 'paper',
  } as const,
  {
    label: 'subjects',
    route: 'subjects',
    icon: 'paper',
  } as const,
  {
    label: 'media',
    route: 'media',
    icon: 'paper',
  } as const,
];

const PrimaryMenu = () => <VerticalNav title="Main Navigation" nav={navs} />;

export default PrimaryMenu;
