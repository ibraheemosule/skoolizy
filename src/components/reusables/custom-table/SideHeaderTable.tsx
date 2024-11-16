import { ReactNode, memo } from 'react';

const style = 'p-3 text-center';

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
            <tr className="border-b border-gray-200">
              {sideHeader && (
                <th
                  style={{ width: boxWidth }}
                  className={`${style} absolute left-0 bg-transparent`}
                />
              )}
              {topHeaders.map((header) => (
                <th
                  key={Math.random()}
                  style={{ width: boxWidth }}
                  className="text-center p-3 bg-purple.light font-bold"
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
              className="odd:bg-gray-50 even:bg-gray-100 border border-gray-200 align-baseline"
            >
              {sideHeader && (
                <th
                  style={{ width: boxWidth }}
                  className="text-center p-3 font-bold absolute left-0"
                >
                  {sideHeader[i]}
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
