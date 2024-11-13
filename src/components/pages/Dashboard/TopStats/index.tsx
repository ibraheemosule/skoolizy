import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewAnnouncement from '~components/pages/Announcements/announcements-widgets/NewAnnouncement';
import ReportAbsence from '~components/reusables/ReportAbsence';
import { BaseBtn } from '~components/reusables/ui/Buttons';
import { BoldText } from '~reusables/ui/Text';

const nav = ['report absence', 'make announcement', 'record grade'];

const TopStats = () => {
  const navigate = useNavigate();
  const [action, setAction] = useState('');
  return (
    <>
      {action === 'report absence' && (
        <ReportAbsence closeModal={() => setAction('')} />
      )}
      {action === 'make announcement' && (
        <NewAnnouncement closeModal={() => setAction('')} />
      )}
      <div className="mt-8 flex gap-8 items-start">
        <menu className="shrink-0 flex flex-col gap-4">
          <h5 className="font-semibold text-lg text-gray-600">Quick Links</h5>
          {nav.map((v) => (
            <li key={v} className="text-purple.dark font-semibold text-base">
              <BaseBtn
                className=" capitalize"
                onClick={() => {
                  if (v === 'record grade') {
                    navigate('/classroom/record-grade');
                  } else setAction(v);
                }}
              >
                {v}
              </BaseBtn>
            </li>
          ))}
        </menu>
        <div className="bg-brown.dark grow rounded-lg grid grid-cols-1 gap-px  xs:grid-cols-2">
          <div className=" px-4 py-6 max-xs:mx-auto">
            <BoldText className="text-2xl text-white">Staffs</BoldText>
            <div className="mt-2">
              <p className="text-sm font-medium  text-gray-400">Present</p>
              <p className=" flex items-baseline gap-x-2">
                <span className="font-semibold tracking-tight text-white">
                  35
                </span>
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium leading-6 text-gray-400">
                Absent
              </p>
              <p className="flex items-baseline gap-x-2">
                <span className="font-semibold tracking-tight text-white">
                  10
                </span>
              </p>
            </div>
          </div>
          <div className=" px-4 py-6 max-xs:mx-auto">
            <BoldText className="text-2xl text-white">Students</BoldText>
            <div className="mt-2">
              <p className="text-sm font-medium  text-gray-400">Present</p>
              <p className=" flex items-baseline gap-x-2">
                <span className="font-semibold tracking-tight text-white">
                  300
                </span>
              </p>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium leading-6 text-gray-400">
                Absent
              </p>
              <p className="flex items-baseline gap-x-2">
                <span className="font-semibold tracking-tight text-white">
                  10
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStats;
