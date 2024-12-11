import { delay, http, HttpResponse } from 'msw';
import { getAccountDetails } from './mockData';
import { baseUrl } from '../index';

export default [
  http.get(baseUrl('/account'), async () => {
    await delay(100);
    return HttpResponse.json(getAccountDetails);
  }),
];
