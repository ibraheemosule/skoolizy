import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import dotenv from 'dotenv';
import { afterEach } from 'vitest';
import server from '~src/mocks/server';

dotenv.config();

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
