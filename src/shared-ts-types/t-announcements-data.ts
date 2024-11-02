type TRecipients = 'parents' | 'staffs' | 'students' | 'all';

type TCommon = {
  message: string;
  recipient: TRecipients;
  title: string;
};

export type TAnnouncementPayload = TCommon &
  (
    | {
        event_end_date?: null;
        event_start_date?: null;
        event_time?: null;
        type: 'memo';
        reminder: null;
      }
    | {
        event_end_date: string;
        event_start_date: string;
        event_time?: null;
        type: 'multi_event';
        reminder: null | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      }
    | {
        event_end_date?: null;
        event_start_date: string;
        event_time: string;
        type: 'single_event';
        reminder: null | 1 | 2 | 3 | 4 | 5 | 6 | 7;
      }
  );

type TFromApi = {
  date_created: string;
  id: 31;
};

export type TAnnouncementsData = TFromApi & TAnnouncementPayload;
