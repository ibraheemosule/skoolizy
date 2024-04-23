import { Dispatch, FC, SetStateAction, memo } from 'react';
import { capitalizeChar } from 'src/utils/format';
import { useLocation } from 'react-router-dom';
import Menu from 'src/assets/icons/MenuIcon';
import CustomField from 'components/reusables/custom-field/CustomField';

interface ITopHeader {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopHeader: FC<ITopHeader> = ({ setToggleNav }) => {
  const { pathname } = useLocation();
  const route = capitalizeChar(pathname.slice(1).replace(/\//g, ' | '));

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
        <h2 className="text-gray-500 text-[1.4rem] font-bold">{route}</h2>
        <div className="shrink-0 ml-auto">
          <CustomField>
            <>
              <CustomField.NonEditable>
                <div className="flex gap-3 rounded-lg p-1 sm:p-2 items-center">
                  <img
                    className="rounded-full object-fill w-[30px] h-[30px]"
                    src="https://picsum.photos/200/300"
                    alt="avi"
                  />
                  <span>Jack</span>
                </div>
              </CustomField.NonEditable>
              <CustomField.DropdownWrapper>
                <CustomField.Dropdown>here</CustomField.Dropdown>
              </CustomField.DropdownWrapper>
            </>
          </CustomField>
        </div>
      </div>
    </>
  );
};

export default memo(TopHeader);
