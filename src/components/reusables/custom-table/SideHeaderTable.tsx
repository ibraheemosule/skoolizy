import { ReactNode, memo } from 'react';

const cellStyles =
  'p-4 w-[150px] sm:w-[200px] text-center border-b border border-gray-200';
const sideHeaderStyles = `${cellStyles} absolute left-0`;

const TopHeader = ({ headers }: { headers: ReactNode[] }) => (
  <thead>
    <tr className="">
      <th
        className={`${sideHeaderStyles} border-b-0 border-r-0 bg-transparent`}
      />
      {headers.map((header) => (
        <th
          key={Math.random()}
          className={`${cellStyles} bg-purple.light font-bold`}
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
);

const SideHeaderTable = ({
  topHeaders,
  content,
  editable = false,
}: {
  topHeaders?: ReactNode[];
  content: Record<string, ReactNode[]>;
  editable?: boolean;
}) => (
  <div className="relative bg-purple.light rounded-xl mt-8 overflow-hidden">
    <div className=" overflow-x-scroll overflow-y-visible max-w-full ml-[150px] sm:ml-[200px]">
      <table className=" table-fixed border-collapse w-full">
        {topHeaders ? <TopHeader headers={topHeaders} /> : null}
        <tbody>
          {Object.entries(content).map(([key, obj]) => (
            <tr key={Math.random()} className="odd:bg-gray-50 even:bg-gray-100">
              <th className={`${sideHeaderStyles} font-bold`}>{key}</th>
              {obj.map((v) => (
                <td
                  key={Math.random()}
                  contentEditable={editable}
                  className={`${cellStyles}`}
                >
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default memo(SideHeaderTable);
