import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      '~api': path.resolve(__dirname, './src/api'),
      '~icons': path.resolve(__dirname, './src/assets/Icons'),
      '~assets': path.resolve(__dirname, './src/assets'),
      '~utils': path.resolve(__dirname, './src/utils'),
      '~shared-ts-types': path.resolve(__dirname, './src/shared-ts-types'),
      '~reusables': path.resolve(__dirname, './src/components/reusables'),
      '~components': path.resolve(__dirname, './src/components'),
      '~router': path.resolve(__dirname, './src/router'),
      '~src': path.resolve(__dirname, './src'),
    },
  },
});
