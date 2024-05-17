import { ReactNode, memo } from 'react';

const cellStyles =
  'p-4 w-[100px] sm:w-[150px] text-center border-b border border-gray-200';
const sideHeaderStyles = `${cellStyles} absolute left-0`;

const TopHeader = ({
  headers,
  sideHeader,
}: {
  headers: ReactNode[];
  sideHeader: boolean;
}) => (
  <thead>
    <tr className="">
      {sideHeader && (
        <th
          className={`${sideHeaderStyles} border-b-0 border-r-0 bg-transparent`}
        />
      )}
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
  sideHeader,
}: {
  topHeaders?: ReactNode[];
  content: ReactNode[][];
  sideHeader?: ReactNode[];
  editable?: boolean;
}) => (
  <div className="relative bg-purple.light rounded-xl overflow-hidden">
    <div
      className={`overflow-x-scroll overflow-y-visible max-w-full ${
        sideHeader ? 'ml-[100px] sm:ml-[150px]' : ''
      }`}
    >
      <table className=" table-fixed border-collapse w-full">
        {topHeaders && (
          <TopHeader sideHeader={!!sideHeader} headers={topHeaders} />
        )}
        <tbody>
          {content.map((datum, i) => (
            <tr
              key={Math.random()}
              className="odd:bg-gray-50 even:bg-gray-100 align-baseline"
            >
              {sideHeader && (
                <th className={`${sideHeaderStyles} font-bold border-b-0`}>
                  {sideHeader?.[i]}
                </th>
              )}
              {datum.map((v) => (
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
