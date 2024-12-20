import { useState } from 'react';
import Icon from '~assets/Icons';
import ListOptions from '~components/reusables/ListOptions';
import { BaseBtn } from '~reusables/ui/Buttons';
import { downloadFile } from '~utils';
import NewMedia from './widgets-media/AddMedia';
import DeleteMedia from './widgets-media/DeleteMedia';
import FilterMedia from './widgets-media/FilterMedia';
import ViewMedia from './widgets-media/ViewMedia';

const a =
  'https://res.cloudinary.com/ibraheemsulay/image/upload/v1695677680/The_Lean_Startup_oaqmsl.png';

const Media = () => {
  const [modal, setModal] = useState('');
  const [view, setView] = useState('');
  const [deleteMedia, setDeleteMedia] = useState('');

  return (
    <section className="flex flex-wrap max-h-full lg:flex-nowrap gap-6 overflow-auto">
      <div className="w-full min-h-full">
        <div className="flex  flex-col md:h-full md:overflow-hidden">
          {modal === 'new' && <NewMedia closeModal={() => setModal('')} />}
          {modal === 'filter' && (
            <FilterMedia closeModal={() => setModal('')} />
          )}
          {view && <ViewMedia img={view} closeModal={() => setView('')} />}
          {deleteMedia && (
            <DeleteMedia
              img={deleteMedia}
              closeModal={() => setDeleteMedia('')}
            />
          )}
          <div className="mt-8">
            <ListOptions
              onManageClick={() => setModal('filter')}
              onActionClick={() => setModal('new')}
              actionText="Add Photo"
            />
          </div>
          <div className="mt-6 pb-8 grow md:h-auto overflow-auto columns-1 xs:columns-2  xlg:columns-3 lg:columns-4 gap-4">
            <div className="mb-2 relative group">
              <div className="absolute flex justify-around items-center bottom-0 h-14 left-0 w-full bg-[#343232d7]">
                <BaseBtn
                  onClick={() => downloadFile(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 -left-1/2 text-white tracking-tight text-xs">
                    Download
                  </span>
                  <Icon
                    name="download"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setView(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 text-white tracking-tight text-xs">
                    View
                  </span>
                  <Icon
                    name="eye"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setDeleteMedia(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute  -top-3/4 text-white tracking-tight text-xs">
                    Delete
                  </span>
                  <Icon
                    name="trash"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
              </div>
              <img src={a} alt="imaging" />
            </div>
            <div className="mb-2 relative group">
              <div className="absolute flex justify-around items-center bottom-0 h-14 left-0 w-full bg-[#343232d7]">
                <BaseBtn
                  onClick={() => downloadFile(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 -left-1/2 text-white tracking-tight text-xs">
                    Download
                  </span>
                  <Icon
                    name="download"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setView(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 text-white tracking-tight text-xs">
                    View
                  </span>
                  <Icon
                    name="eye"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setDeleteMedia(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute  -top-3/4 text-white tracking-tight text-xs">
                    Delete
                  </span>
                  <Icon
                    name="trash"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
              </div>
              <img src={a} alt="imaging" />
            </div>
            <div className="mb-2 relative group">
              <div className="absolute flex justify-around items-center bottom-0 h-14 left-0 w-full bg-[#343232d7]">
                <BaseBtn
                  onClick={() => downloadFile(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 -left-1/2 text-white tracking-tight text-xs">
                    Download
                  </span>
                  <Icon
                    name="download"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setView(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 text-white tracking-tight text-xs">
                    View
                  </span>
                  <Icon
                    name="eye"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setDeleteMedia(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute  -top-3/4 text-white tracking-tight text-xs">
                    Delete
                  </span>
                  <Icon
                    name="trash"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
              </div>
              <img src={a} alt="imaging" />
            </div>
            <div className="mb-2 relative group">
              <div className="absolute flex justify-around items-center bottom-0 h-14 left-0 w-full bg-[#343232d7]">
                <BaseBtn
                  onClick={() => downloadFile(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 -left-1/2 text-white tracking-tight text-xs">
                    Download
                  </span>
                  <Icon
                    name="download"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setView(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 text-white tracking-tight text-xs">
                    View
                  </span>
                  <Icon
                    name="eye"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
                <BaseBtn
                  onClick={() => setDeleteMedia(a)}
                  className="flex-col relative _media-options-btn items-center flex"
                >
                  <span className="absolute -top-3/4 text-white tracking-tight text-xs">
                    Delete
                  </span>
                  <Icon
                    name="trash"
                    stroke="#fff"
                    strokeWidth={2}
                    height={22}
                    width={22}
                  />
                </BaseBtn>
              </div>
              <img src={a} alt="imaging" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
