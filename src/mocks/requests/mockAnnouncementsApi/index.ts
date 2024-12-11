import { http, HttpResponse } from 'msw';
import {
  mockAllAnnouncements,
  mockSingleEventAnnouncement,
  mockMultiEventAnnouncement,
  mockMemoAnnouncement,
} from './data';
import { baseUrl, withDelay } from '..';

export default [
  http.get(
    baseUrl('/announcements'),
    withDelay(() => HttpResponse.json(mockAllAnnouncements))
  ),

  http.get(
    baseUrl(' /announcements/1'),
    withDelay(() => HttpResponse.json(mockMultiEventAnnouncement))
  ),

  http.get(
    baseUrl(' /announcements/2'),
    withDelay(() => HttpResponse.json(mockSingleEventAnnouncement))
  ),

  http.get(
    baseUrl(' /announcements/3'),
    withDelay(() => HttpResponse.json(mockMemoAnnouncement))
  ),
];
