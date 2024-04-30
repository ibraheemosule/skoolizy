import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '~assets/icons';
import { TIconNames } from '~assets/icons/IconNames';

type TVerticalNav = {
  nav: {
    label: string;
    route: string;
    icon?: TIconNames;
  }[];
  title?: string;
};

export const VerticalNav = memo(({ nav, title }: TVerticalNav) => (
  <nav className="border-t border-gray-300 mt-6 pt-4 font-bold">
    {title && <h2 className="_full text-xl py-4">{title}</h2>}
    <menu className="text-gray-800">
      {nav.map((nav) => (
        <li key={nav.label} className="group cursor-pointer relative">
          <NavLink
            to={nav.route || '#'}
            className="nav-item capitalize pl-8 text-gray-500 hover:text-black hover:bg-gray-100  py-4 flex items-center relative"
          >
            {nav.icon && <Icon name={nav.icon} style={{ marginRight: 10 }} />}
            <span>{nav.label}</span>
            <i className="absolute hidden bg-brown.dark w-[10px] top-0 left-0 h-full rounded-tr-xl rounded-br-xl group-hover:block" />
          </NavLink>
        </li>
      ))}
    </menu>
  </nav>
));

VerticalNav.displayName = 'VerticalNav';

type THorizontalNav = { nav: Record<string, string> };

export const HorizontalNav = memo(({ nav }: THorizontalNav) => (
  <nav className="classrooms-nav  mt-8 flex border-b overflow-x-auto border-gray-300 gap-4">
    {Object.entries(nav).map(([label, route]) => (
      <NavLink key={label} className="p-1 horizontal-nav shrink-0" to={route}>
        {label}
      </NavLink>
    ))}
  </nav>
));

HorizontalNav.displayName = 'HorizontalNav';
