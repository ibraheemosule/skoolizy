export const mockAllAnnouncements = {
  data: [
    {
      date_created: '2024-06-16T08:46:30',
      event_end_date: '2030-09-28',
      event_start_date: '2030-07-19',
      event_time: null,
      id: 1,
      message: 'here is anosdftherorking',
      recipient: 'staffs',
      title: 'loofor staffs ng',
      type: 'multi_event',
    },

    {
      date_created: '2024-06-16T08:44:58',
      event_end_date: null,
      event_start_date: '2039-06-19',
      event_time: '09:00:00',
      id: 2,
      message: 'here is anosdftherorking',
      recipient: 'all',
      title: 'look test school starts badng',
      type: 'single_event',
    },

    {
      date_created: '2024-06-17T16:27:08',
      event_end_date: null,
      event_start_date: null,
      event_time: null,
      id: 3,
      message: 'here iswor orking',
      recipient: 'staffs',
      title: 'ateenda staffs ng',
      type: 'memo',
    },
  ],
  page: 13,
  per_page: 10,
  total_items: 129,
  total_pages: 13,
};

export const mockMultiEventAnnouncement = {
  data: mockAllAnnouncements.data[0],
};

export const mockSingleEventAnnouncement = {
  data: mockAllAnnouncements.data[1],
};

export const mockMemoAnnouncement = {
  data: mockAllAnnouncements.data[2],
};
