import { memo } from 'react';
import CustomField from '../custom-field/CustomField';

const topHeader = ['Student', 'Grade'];
const content = {
  'john doe': 0,
  john: 0,
  'john d': 0,
  'john e': 0,
  'jo doe': 0,
  'jn doe': 0,
  'hn doe': 0,
  'john oe': 0,
  'john de': 0,
  'john do': 0,
  'joh doe': 0,
  'jon doe': 0,
  'jhn doe': 0,
  'ohn doe': 0,
};

const CustomTable = ({ minWidth }: { minWidth?: string }) => (
  <div className=" w-full overflow-hidden overflow-x-auto rounded-lg">
    <table className={`w-full ${minWidth ?? 'min-w-[640px]'} capitalize`}>
      <thead className="table w-full">
        <tr className="table w-full border-b text-lg bg-purple.light border-white rounded-t-lg">
          {topHeader.map((header) => (
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
        {Object.entries(content).map(([key, obj]) => (
          <tr
            key={Math.random()}
            className="table w-full border-b border-white odd:bg-gray-50 even:bg-gray-100"
          >
            <td
              onClick={() => null}
              className="break-all w-[33%] text-center py-4 px-2  font-semibold  border-white last:border-0"
            >
              {key}
            </td>
            <td
              onClick={() => null}
              className="break-all w-[33%] text-center py-4 px-2  font-semibold  border-white last:border-0"
            >
              <div className="max-w-[100px] mx-auto">
                <CustomField>
                  <CustomField.Editable value={obj} type="text" />
                </CustomField>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default memo(CustomTable);
