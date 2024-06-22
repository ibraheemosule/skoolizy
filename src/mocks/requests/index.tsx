export const baseUrl = (path: string) =>
  new URL(path, String(import.meta.env.VITE_BASE_URL)).href;

export const test = '';
