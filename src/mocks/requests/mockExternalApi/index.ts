import { delay, http, HttpResponse } from 'msw';
import { countries } from './data';

const COUNTRY_URL = String(import.meta.env.VITE_COUNTRIES_URL);

export default [
  http.get(COUNTRY_URL, async () => {
    await delay(100);
    return HttpResponse.json(countries);
  }),
];
