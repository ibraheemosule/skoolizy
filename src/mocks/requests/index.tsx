import { HttpResponseResolver, delay } from 'msw';
import { getEnv } from '~utils';

export const baseUrl = (path: string) =>
  new URL(path, getEnv('VITE_BASE_URL')).href;

export const withDelay =
  (resolver: HttpResponseResolver): HttpResponseResolver =>
  async (...args) => {
    await delay(100);
    return resolver(...args);
  };
