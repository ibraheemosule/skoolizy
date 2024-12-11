import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

type TEventCalender = {
  weekends?: boolean;
  events: { title: string; date: string }[];
};

const EventCalendar = ({ weekends, events }: TEventCalender) => (
  <FullCalendar
    plugins={[dayGridPlugin]}
    initialView="dayGridMonth"
    weekends={!!weekends}
    events={events}
  />
);

export default EventCalendar;
