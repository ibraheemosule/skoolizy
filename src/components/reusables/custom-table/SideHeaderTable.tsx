import { ReactNode, memo } from 'react';

const style = 'p-4 text-center border-b border border-gray-200';

const SideHeaderTable = ({
  topHeaders,
  content,
  editable = false,
  sideHeader,
  boxWidth = '150px',
}: {
  topHeaders?: ReactNode[];
  content: ReactNode[][];
  sideHeader?: ReactNode[];
  editable?: boolean;
  boxWidth?: string;
}) => (
  <div className="relative bg-purple.light rounded-xl overflow-hidden">
    <div
      {...(sideHeader && { style: { marginLeft: boxWidth } })}
      className="overflow-x-scroll overflow-y-visible max-w-full"
    >
      <table className=" table-fixed border-collapse w-full">
        {topHeaders && (
          <thead>
            <tr>
              {sideHeader && (
                <th
                  style={{ width: boxWidth }}
                  className={`${style} absolute left-0 border-b-0 border-r-0 bg-transparent`}
                />
              )}
              {topHeaders.map((header) => (
                <th
                  key={Math.random()}
                  style={{ width: boxWidth }}
                  className={`${style}  bg-purple.light font-bold`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {content.map((datum, i) => (
            <tr
              key={Math.random()}
              className="odd:bg-gray-50 even:bg-gray-100 align-baseline"
            >
              {sideHeader && (
                <th
                  style={{ width: boxWidth }}
                  className={`${style} font-bold border-b-0 absolute left-0`}
                >
                  {sideHeader?.[i]}
                </th>
              )}
              {datum.map((v) => (
                <td
                  key={Math.random()}
                  contentEditable={editable}
                  style={{ width: boxWidth }}
                  className={`${style} `}
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
