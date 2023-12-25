import { Dispatch, FC, SetStateAction, memo } from 'react';
import SearchBar from 'components/reusables/search-bar/SearchBar';
import Menu from 'src/assets/icons/Menu';

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
      <div className="grow md:w-1/2 lg:w-3/5 self-stretch">
        <SearchBar />
      </div>
      <div>
        <div className="flex gap-3 rounded-lg border p-1 sm:p-2 items-center border-gray-300">
          <img
            className="rounded-full object-fill w-[30px] h-[30px]"
            src="https://picsum.photos/200/300"
            alt="avi"
          />
          <span>Jack</span>
          <i className="fa fa-angle-down" />
        </div>
      </div>
    </div>
  </>
);

export default memo(TopHeader);
