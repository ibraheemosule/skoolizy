import { delay, http, HttpResponse } from 'msw';
import {
  mockAllAnnouncements,
  mockSingleEventAnnouncement,
  mockMultiEventAnnouncement,
  mockMemoAnnouncement,
} from './data';
import { baseUrl } from '..';

export default [
  http.get(baseUrl('/announcements'), async () => {
    await delay(100);
    return HttpResponse.json(mockAllAnnouncements);
  }),
  http.get(baseUrl(' /announcements/1'), async () => {
    await delay(100);
    return HttpResponse.json(mockMultiEventAnnouncement);
  }),
  http.get(baseUrl(' /announcements/2'), async () => {
    await delay(100);
    return HttpResponse.json(mockSingleEventAnnouncement);
  }),
  http.get(baseUrl(' /announcements/3'), async () => {
    await delay(100);
    return HttpResponse.json(mockMemoAnnouncement);
  }),
];
