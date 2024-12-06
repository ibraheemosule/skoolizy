import { HttpResponseResolver, delay } from 'msw';
import { env } from '~utils/constants';

export const baseUrl = (path: string) =>
  new URL(path, String(env.VITE_BASE_URL)).href;

export const withDelay = (
  resolver: HttpResponseResolver
): HttpResponseResolver => async (...args) => {
    await delay(100);
    return resolver(...args);
  };
