import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '~assets/Icons';

type TListOptions = {
  page?: number;
  totalPage?: number;
  items?: number;
  filterAction: (arg: { [key: string]: string }) => void;
  type: string;
};

const focus = (condition: boolean | string) =>
  condition ? ' hover:opacity-50' : 'opacity-20 cursor-not-allowed';

const Pagination = ({
  page,
  totalPage,
  items,
  filterAction,
  type,
}: TListOptions) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [num, setNum] = useState('');

  useEffect(() => {
    setNum(String(page || 1));
  }, [page]);

  const next = () => {
    if (+num < Number(totalPage)) {
      filterAction({ page: String(+num + 1) });
    }
  };

  const prev = () => {
    if (+num > 1) filterAction({ page: String(+num - 1) });
  };

  const checkPaginationValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const allowedKeys = ['Backspace', 'ArrowRight', 'ArrowLeft'];
    const isInvalidValue =
      !allowedKeys.includes(e.key) &&
      (Number.isNaN(+e.key) || Number(num + e.key) > Number(totalPage));

    if (isInvalidValue) e.preventDefault();
  };

  return (
    <div className="flex grow flex-wrap justify-between gap-4 text-purple.dark font-semibold">
      <span className="flex items-center font-bold capitalize">
        ({items || 0}) {type}
      </span>

      <div className="flex gap-3 items-center shrink-0 ">
        <button
          disabled={+num < 2}
          className={`${focus(Number(page) > 1)} flex items-center`}
          onClick={prev}
        >
          <Icon name="caretLeftSolid" /> Prev
        </button>
        <button
          disabled={+num === totalPage}
          className={`${focus(page !== totalPage)} flex items-center`}
          onClick={next}
        >
          Next <Icon name="caretRightSolid" />
        </button>
        {page && (
          <span className="flex items-center gap-1">
            <label className="flex">
              Pages ({totalPage || 0})
              <input
                value={num}
                onChange={(e) => setNum(e.target.value)}
                onKeyDown={checkPaginationValue}
                onBlur={() => +num < 1 && setNum(String(page))}
                className="outline-none border ml-2 text-center max-w-10 px-1"
              />
            </label>
            <button
              onClick={() => filterAction({ page: num })}
              className="hover:opacity-50 text-white"
            >
              <Icon
                name="circledArrowRight"
                width={32}
                height={32}
                fill="#432c81"
              />
            </button>
          </span>
        )}
        <button
          disabled={!search}
          className={`${focus(
            search
          )} flex gap-x-1 items-center text-purple.dark`}
          onClick={() => navigate('.', { replace: true })}
        >
          <span>Reset</span>
          <Icon name="cancel" height={14} width={14} strokeWidth={4} />
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
