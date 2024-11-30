type TRecipients = 'parents' | 'staffs' | 'students' | 'all';

type TCommon = {
  id: number;
  message: string;
  recipient: TRecipients;
  title: string;
  created_by: {
    email: 'ibraheemsulay@gmail.com';
    first_name: 'Ibrahim';
    tag: 'staff-23';
  };
};

export type TAnnouncementPayload = TCommon &
  (
    | {
        event_end_date?: null;
        event_start_date?: null;
        event_time?: null;
        announcement_type: 'memo';
        reminder: null;
      }
    | {
        event_end_date: string;
        event_start_date: string;
        event_time?: null;
        announcement_type: 'multi_event';
        reminder: null | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      }
    | {
        event_end_date?: null;
        event_start_date: string;
        event_time: string;
        announcement_type: 'single_event';
        reminder: null | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      }
  );

type TFromApi = {
  date_created: string;
  id: number;
};

export type TAnnouncementsData = TFromApi & TAnnouncementPayload;
