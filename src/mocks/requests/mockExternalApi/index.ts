import { delay, http, HttpResponse } from 'msw';
import { countries } from './data';
import { env } from '~utils/constants';

const COUNTRY_URL = String(env.VITE_COUNTRIES_URL);

export default [
  http.get(COUNTRY_URL, async () => {
    await delay(100);
    return HttpResponse.json(countries);
  }),
];
