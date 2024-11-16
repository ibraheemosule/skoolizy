import { Dispatch, FC, SetStateAction, memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { capCharRemoveUnderscore } from '~src/utils';
import Menu from '~assets/Icons/MenuIcon';
import CustomField from '~reusables/CustomField';
import useCustomField from '~reusables/CustomField/hooks-custom-field/useCustomField';

interface ITopHeader {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopHeader: FC<ITopHeader> = ({ setToggleNav }) => {
  const { pathname } = useLocation();
  const route = pathname.slice(1).split('/');

  const [user, setUser] = useCustomField('john');

  return (
    <>
      <button
        title="menu button"
        data-testid="menu-btn"
        onClick={() => setToggleNav(true)}
        className="shrink-0 mr-4 md:hidden"
        type="button"
      >
        <Menu />
      </button>
      <div className="flex grow gap-4 items-center justify-between">
        <h2 className="hidden sm:block text-gray-500 text-xl font-semibold">
          {route.map((r, i) => (
            <NavLink
              key={r}
              className="tracking-tight first:before:hidden before:content-['-'] before:mx-2 hover:text-purple.dark"
              to={route.slice(0, i + 1).join('/')}
            >
              {capCharRemoveUnderscore(r.replace(/-/g, ' '))}
            </NavLink>
          ))}
        </h2>
        <div className="shrink-0 ml-auto">
          <CustomField
            field="select"
            value={
              <div className="flex gap-3 rounded-lg p-1 sm:p-2 items-center">
                <img
                  className="rounded-full object-fill w-[30px] h-[30px]"
                  src="https://picsum.photos/200/300"
                  alt="avi"
                />
                <span className="capitalize">{user}</span>
              </div>
            }
            onSelect={setUser}
          >
            <CustomField.DropdownWrapper width={100}>
              <CustomField.Dropdown value="joshua">Joshua</CustomField.Dropdown>
              <CustomField.Dropdown value="John">John</CustomField.Dropdown>
              <CustomField.Dropdown value="Maryam">
                Maryamisjkjds kajskdjkjfska j sfkjkldfjklajkljfkls
              </CustomField.Dropdown>
            </CustomField.DropdownWrapper>
          </CustomField>
        </div>
      </div>
    </>
  );
};

export default memo(TopHeader);
