import { memo, ReactNode } from 'react';

const CustomTable = ({
  minWidth,
  header,
  content,
  rowClick,
}: {
  minWidth?: string;
  header: string[];
  content: ReactNode[][];
  rowClick?: () => void;
}) => (
  <div className=" w-full overflow-hidden overflow-x-auto rounded-lg">
    <table className={`w-full ${minWidth ?? 'min-w-[640px]'} capitalize`}>
      <thead className="table w-full">
        <tr className="table w-full border-b text-lg bg-purple.light border-white rounded-t-lg">
          {header.map((header) => (
            <th
              key={Math.random()}
              onClick={() => null}
              className="py-4 px-2 w-[33%] break-all  border-white last:border-0 "
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className=" block max-h-[400px] overflow-auto">
        {content.map((val) => (
          <tr
            key={Math.random()}
            onClick={rowClick}
            className="table w-full border-b border-white odd:bg-gray-50 even:bg-gray-100"
          >
            {val.map((v) => (
              <td
                key={Math.random()}
                className="break-all w-[33%] text-center py-4 px-2  font-semibold  border-white last:border-0"
              >
                {v}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default memo(CustomTable);
