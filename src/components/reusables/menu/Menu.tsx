import { ReactNode, memo } from 'react';

interface IMenu {
  children: ReactNode | string;
}

const Menu = ({ children }: IMenu) => (
  <nav className="border-t border-gray-300 mt-6 pt-4 font-bold">{children}</nav>
);

const Title = ({ children }: IMenu) => (
  <h2 className="_full  text-xl py-4">{children}</h2>
);

const Wrapper = ({ children }: IMenu) => (
  <ul className=" text-gray-800">{children}</ul>
);

const Item = ({ children }: IMenu) => (
  <li className="group pl-6 py-4 text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer relative">
    <i className="fa fa-phone group-hover:text-dark.brown" />
    <span className="ml-3">{children}</span>
    <i className="absolute hidden bg-dark.brown w-[10px] top-0 right-0 h-full rounded-tl-xl rounded-bl-xl group-hover:block" />
  </li>
);

Menu.Title = memo(Title);
Menu.Item = memo(Item);
Menu.Wrapper = memo(Wrapper);

export default Menu;
