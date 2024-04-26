import { VerticalNav } from 'reusables/menu';

const navs = [
  {
    label: 'dashboard',
    route: 'dashboard',
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
    label: 'hightlights',
    route: 'hightlights',
    icon: 'paper',
  } as const,
  {
    label: 'announcements',
    route: 'announcements',
    icon: 'paper',
  } as const,
  {
    label: 'record grade',
    route: 'record-grade',
    icon: 'paper',
  } as const,
  {
    label: 'school information',
    route: 'school-information',
    icon: 'paper',
  } as const,
];

const PrimaryMenu = () => <VerticalNav title="Main Navigation" nav={navs} />;

export default PrimaryMenu;
