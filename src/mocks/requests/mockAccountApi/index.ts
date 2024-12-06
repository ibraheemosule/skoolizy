import { delay, http, HttpResponse } from 'msw';
import { account } from './mockData';
import { baseUrl } from '~src/mocks/requests';

export default [
  http.get(baseUrl('/account'), async () => {
    await delay(100);
    return HttpResponse.json(account);
  }),
];
