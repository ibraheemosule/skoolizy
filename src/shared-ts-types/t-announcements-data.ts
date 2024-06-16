type TRecipients = 'parents' | 'teachers' | 'students' | 'all';

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
      }
    | {
        event_end_date: string;
        event_start_date: string;
        event_time?: null;
        type: 'multi_event';
      }
    | {
        event_end_date?: null;
        event_start_date: string;
        event_time: string;
        type: 'single_event';
      }
  );

type TFromApi = {
  date_created: string;
  id: 31;
};

export type TAnnouncementsData = TFromApi & TAnnouncementPayload;
