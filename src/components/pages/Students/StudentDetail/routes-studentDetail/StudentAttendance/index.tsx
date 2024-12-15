import AttendanceOptions from './Options';
import EventCalendar from '~components/reusables/EventCalendar';

const StaffAttendance = () => (
  <section className="flex flex-wrap max-h-full lg:flex-nowrap overflow-auto">
    <div className="w-full min-h-full shrink-0">
      <div className="flex flex-col md:h-full md:overflow-hidden">
        <div className="flex justify-between flex-wrap gap-4">
          <div className="flex gap-4 flex-wrap items-center">
            <p className="font-semibold text-lg text-gray-600">
              Absence Count - 4 days
            </p>
          </div>
          <AttendanceOptions />
        </div>

        <div className="mt-8 grow h-[70vh] md:h-auto overflow-auto">
          <EventCalendar
            events={[
              { title: 'Event 1', date: '2024-05-18' },
              {
                title:
                  'Event 2 ksdjkl k klamkldsa kk akkf aklsjkldfjkla lkflk klsdklf lkaj kl klfalksdj ljalk sflka lkf lad jlkfjlk jlkjldksfj lkajflkjlkdsjlkafjlkasjlks lka lakf lkf lks',
                date: '2024-05-20T14:10:30Z',
              },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

export default StaffAttendance;
