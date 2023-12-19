import { Dispatch, FC, SetStateAction, memo } from 'react';
import SearchBar from 'components/reusables/search-bar/SearchBar';

interface ITopHeader {
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}

const TopHeader: FC<ITopHeader> = ({ setToggleNav }) => (
  <header className="_full flex">
    <button
      data-testid="menu-btn"
      onClick={() => setToggleNav(true)}
      className="fa fa-bars fa-2x shrink-0 md:hidden"
      type="button"
    />
    <div className="flex grow items-center justify-between">
      <div className="w-2/3 md:w-1/2 lg:w-3/5 self-stretch">
        <SearchBar />
      </div>
      <div>
        <div className="flex gap-3 rounded-lg border p-2 items-center border-gray-300">
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
  </header>
);

export default memo(TopHeader);
