import { Dispatch, FC, SetStateAction, memo } from 'react';
import { capitalizeChar } from 'src/utils/format';
import { useLocation } from 'react-router-dom';
import Menu from 'src/assets/icons/MenuIcon';
import CustomField from 'components/reusables/custom-field';
import useCustomField from 'components/reusables/custom-field/hooks-custom-field/useCustomField';

interface ITopHeader {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopHeader: FC<ITopHeader> = ({ setToggleNav }) => {
  const { pathname } = useLocation();
  const route = capitalizeChar(pathname.slice(1).replace(/\//g, ' | '));
  const [user, setUser] = useCustomField('john');

  return (
    <>
      <button
        data-testid="menu-btn"
        onClick={() => setToggleNav(true)}
        className="shrink-0 mr-4 md:hidden"
        type="button"
      >
        <Menu />
      </button>
      <div className="flex grow gap-4 items-center justify-between">
        <h2 className="hidden sm:block sm:text-gray-500 sm:text-[1.4rem] sm:font-bold">
          {route}
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
            <CustomField.DropdownWrapper>
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
