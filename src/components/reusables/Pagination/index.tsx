import { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import Icon from '~assets/Icons';

type TListOptions = {
  page?: number;
  totalPage?: number;
  items?: number;
  filterAction: (arg: { [key: string]: string }) => void;
  type: string;
};

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
    const isInvalidValue =
      e.key !== 'Backspace' &&
      (Number.isNaN(+e.key) || Number(num + e.key) > Number(totalPage));

    if (isInvalidValue) e.preventDefault();
  };

  return (
    <div className="flex grow flex-wrap justify-between gap-4 text-purple.dark font-semibold">
      <span className="flex items-center font-semibold">
        ({items}) {type}
      </span>

      <div className="flex gap-3 items-center shrink-0 ">
        <BaseBtn className="flex items-center" onClick={prev}>
          <Icon name="caretLeftSolid" /> Prev
        </BaseBtn>
        <BaseBtn className="flex items-center" onClick={next}>
          Next <Icon name="caretRightSolid" />
        </BaseBtn>
        <span className="flex items-center gap-1">
          <label className="flex">
            Pages ({totalPage})
            <input
              value={num}
              onChange={(e) => setNum(e.target.value)}
              onKeyDown={checkPaginationValue}
              onBlur={() => +num < 1 && setNum(String(page))}
              className="outline-none border ml-2 text-center max-w-10 px-1"
            />
          </label>
          <BaseBtn
            onClick={() => filterAction({ page: num })}
            className="hover:opacity-50 text-white"
          >
            <Icon
              name="circledArrowRight"
              width={32}
              height={32}
              fill="#432c81"
            />
          </BaseBtn>
        </span>
        <BaseBtn
          className={`${
            search ? ' hover:opacity-50' : 'opacity-20 cursor-not-allowed'
          } font-bold flex gap-x-1 items-center text-purple.dark`}
          onClick={() => navigate('.', { replace: true })}
        >
          <span className="">Reset</span>
          <Icon name="cancel" height={14} width={14} strokeWidth={4} />
        </BaseBtn>
      </div>
    </div>
  );
};

export default memo(Pagination);
