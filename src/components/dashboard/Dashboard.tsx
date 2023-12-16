import { memo } from 'react';
import SearchBar from 'components/reusables/search-bar/SearchBar';

const Dashboard = () => (
  <main className="relative flex overflow-hidden">
    <section className="modal z-10 h-screen w-full absolute top-0 left-0 md:relative md:w-1/3  xlg:w-1/4 xl:w-1/6 shrink-0">
      <div className="h-screen flex flex-col w-3/4 xs:w-3/5 sm:w-2/5 md:w-full pt-6 bg-white">
        <div className="shrink-0 flex items-center gap-4 _full">
          <i className="fa fa-phone fa-3x" />
          <span className="text-3xl font-bold">Classify</span>
        </div>
        <div className="grow overflow-y-auto">
          <nav className="border-t border-gray-300 mt-6 pt-4 font-bold">
            <h2 className="_full  text-xl py-4">Primary Menu</h2>
            <ul className=" text-gray-800">
              {new Array(5).fill('l').map(() => (
                <li
                  key={Math.random()}
                  className="group pl-6 py-4 text-gray-500 hover:text-black hover:bg-gray-100 cursor-pointer relative"
                >
                  <i className="fa fa-phone group-hover:text-dark.brown" />
                  <span className="ml-3">Health Assessment</span>
                  <i className="absolute hidden bg-dark.brown w-[10px] top-0 right-0 h-full rounded-tl-xl rounded-bl-xl group-hover:block" />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <section className="h-screen w-full overflow-y-auto grow pt-6">
      <header className="_full">
        <div className="flex items-center justify-between">
          <div className="w-2/3 md:w-1/2 mx-auto self-stretch">
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
              <i className="fa fa-arrow-down" />
            </div>
          </div>
        </div>
      </header>
    </section>
  </main>
);

export default memo(Dashboard);
