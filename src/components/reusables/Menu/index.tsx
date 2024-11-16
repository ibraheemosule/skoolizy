import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '~assets/Icons';
import { TIconNames } from '~assets/Icons/IconNames';
import { BaseBtn } from '../ui/Buttons';

type TVerticalNav = {
  nav: {
    label: string;
    route?: string;
    action?: () => void;
    icon?: TIconNames;
  }[];
  title?: string;
};

export const VerticalNav = memo(({ nav, title }: TVerticalNav) => (
  <nav className="border-t border-gray-300 mt-6 pt-4 font-bold">
    {title && <h2 className="_full text-xl py-4">{title}</h2>}
    <menu className="text-gray-800">
      {nav.map((nav) => {
        const Btn = nav.route ? NavLink : BaseBtn;
        return (
          <li key={nav.label} className="group cursor-pointer relative">
            <Btn
              to={nav.route || '#'}
              {...(nav.action && { onClick: nav.action })}
              className="nav-item w-full capitalize pl-8 text-gray-500 hover:text-black hover:bg-gray-100  py-4 flex items-center relative"
            >
              {nav.icon && (
                <Icon
                  height={20}
                  width={20}
                  name={nav.icon}
                  style={{ marginRight: 10 }}
                />
              )}
              <span>{nav.label}</span>
              <i className="absolute hidden bg-brown.dark w-[10px] top-0 left-0 h-full rounded-tr-xl rounded-br-xl group-hover:block" />
            </Btn>
          </li>
        );
      })}
    </menu>
  </nav>
));

VerticalNav.displayName = 'VerticalNav';

type THorizontalNav = {
  nav: Record<string, string | (() => void)>;
  active?: string;
};

export const HorizontalNav = memo(({ nav, active }: THorizontalNav) => (
  <nav className="classrooms-nav flex border-b overflow-x-auto border-gray-100 gap-4">
    {Object.entries(nav).map(([label, action]) => {
      const isRoute = typeof action === 'string';
      const Btn = isRoute ? NavLink : BaseBtn;

      return (
        <Btn
          {...(!isRoute && { onClick: action })}
          to={isRoute ? action : '#'}
          key={label}
          className={`p-1 horizontal-nav ${
            active?.toLowerCase() === label.toLowerCase() ? 'active' : ''
          } shrink-0`}
        >
          {label}
        </Btn>
      );
    })}
  </nav>
));

HorizontalNav.displayName = 'HorizontalNav';
