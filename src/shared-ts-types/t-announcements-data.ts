export type TAnnouncementRecipients =
  | 'guardians'
  | 'staffs'
  | 'students'
  | 'general';

type TCommon = {
  id: number;
  message: string;
  recipient: TAnnouncementRecipients;
  title: string;
  reminder: null | 1 | 2 | 3 | 4 | 5 | 6 | 7;
  created_by: {
    first_name: string;
    last_name: string;
    tag: string;
    title: string;
  };
};

export type TAnnouncementPayload = TCommon &
  (
    | {
        announcement_type: 'memo';
      }
    | {
        event_end_date: string;
        event_start_date: string;
        announcement_type: 'multi_event';
      }
    | {
        event_start_date: string;
        event_time: string;
        announcement_type: 'single_event';
      }
  );

type TFromApi = {
  date_created: string;
  id: number;
};

export type TAnnouncementsData = TFromApi & TAnnouncementPayload;
