import { memo } from 'react';

const CustomTable = () => (
  <div className=" w-full overflow-hidden overflow-x-auto rounded-lg">
    <table className="w-full min-w-[640px] mt-4 bg-gray-100 capitalize">
      <thead className="table w-full">
        <tr className="table w-full border-b-4 text-lg bg-purple.light border-white rounded-t-lg">
          <th
            onClick={() => console.log('click')}
            className="py-4 px-2 w-[33%] break-all border-r-2 border-white last:border-0 "
          >
            Classroom
          </th>
          <th
            onClick={() => console.log('click')}
            className="py-4 px-2 w-[33%] break-all border-r-2 border-white last:border-0"
          >
            Subject
          </th>
          <th
            onClick={() => console.log('click')}
            className="py-4 px-2 w-[33%] break-all border-r-2 border-white last:border-0"
          >
            Teacher
          </th>
        </tr>
      </thead>
      <tbody className=" block max-h-[220px] overflow-auto">
        {new Array(30).fill(';').map(() => (
          <tr
            key={Math.random()}
            className="table w-full border-b-4 border-white"
          >
            <td
              onClick={() => console.log('click')}
              className="break-all w-[33%] text-center py-4 px-2 border-r-2 font-semibold  border-white last:border-0"
            >
              JSS-1
            </td>
            <td
              onClick={() => console.log('click')}
              className="break-all w-[33%] text-center py-4 px-2 border-r-2 font-semibold  border-white last:border-0"
            >
              Biology
            </td>
            <td
              onClick={() => console.log('click')}
              className="break-all w-[33%] text-center py-4 px-2 border-r-2 font-semibold  border-white last:border-0"
            >
              Mr John Doe
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default memo(CustomTable);
