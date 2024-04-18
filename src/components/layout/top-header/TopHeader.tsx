import { Dispatch, FC, SetStateAction, memo } from 'react';
import Menu from 'src/assets/icons/MenuIcon';
import CustomField from 'components/reusables/custom-field/CustomField';

interface ITopHeader {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopHeader: FC<ITopHeader> = ({ setToggleNav }) => (
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
      <div className="grow md:max-w-[50%] lg:max-w-[60%] self-stretch">
        <CustomField
          field="input"
          icon
          search
          placeholder="Search for anything"
          onChange={() => null}
        />
      </div>
      <div className="shrink-0">
        <CustomField
          field="select"
          value={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <div className="flex gap-3 rounded-lg p-1 sm:p-2 items-center">
              <img
                className="rounded-full object-fill w-[30px] h-[30px]"
                src="https://picsum.photos/200/300"
                alt="avi"
              />
              <span>Jack</span>
            </div>
          }
        >
          <CustomField.DropdownWrapper>
            <CustomField.Dropdown>here</CustomField.Dropdown>
          </CustomField.DropdownWrapper>
        </CustomField>
      </div>
    </div>
  </>
);

export default memo(TopHeader);
