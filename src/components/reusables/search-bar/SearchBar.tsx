import { Dispatch, SetStateAction, memo, FC } from 'react';

interface ISearchBar {
  search?: string;
  setSearch?: Dispatch<SetStateAction<string>>;
}

const SearchBar: FC<ISearchBar> = ({ search, setSearch }) => (
  <div className="h-full rounded-xl overflow-hidden relative">
    <input
      value={search}
      onChange={(e) => setSearch?.(e.target.value)}
      placeholder="Search"
      className="min-w-full h-full bg-gray-200 p-2 px-4 outline-none"
      type="search"
    />
    {search ? null : (
      <i className="fa fa-search absolute right-4 top-1/2 -translate-y-1/2 font-light" />
    )}
  </div>
);

export default memo(SearchBar);
