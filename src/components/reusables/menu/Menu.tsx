import { memo } from 'react';
import { IChild } from 'src/ts-types/react-types';
import { NavLink } from 'react-router-dom';

const Menu = ({ children }: IChild) => (
  <nav className="border-t border-gray-300 mt-6 pt-4 font-bold">{children}</nav>
);

const Title = ({ children }: IChild) => (
  <h2 className="_full text-xl py-4">{children}</h2>
);

const Wrapper = ({ children }: IChild) => (
  <ul className=" text-gray-800">{children}</ul>
);

const Item = ({ children, link }: IChild & { link?: string }) => (
  <li className="group cursor-pointer relative">
    <NavLink
      to={link || '#'}
      className="nav-item capitalize pl-8 text-gray-500 hover:text-black hover:bg-gray-100  py-4 flex items-center relative"
    >
      <i className="fa fa-phone group-hover:text-brown.dark mr-3" />
      <span>{children}</span>
      <i className="absolute hidden bg-brown.dark w-[10px] top-0 left-0 h-full rounded-tr-xl rounded-br-xl group-hover:block" />
    </NavLink>
  </li>
);

Menu.Title = memo(Title);
Menu.Item = memo(Item);
Menu.Wrapper = memo(Wrapper);

export default Menu;
