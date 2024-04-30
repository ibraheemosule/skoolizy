import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      '~src': path.resolve(__dirname, '/src'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~icons': path.resolve(__dirname, 'src/assets/icons'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~router': path.resolve(__dirname, 'src/router'),
      '~utils': path.resolve(__dirname, 'src/utils'),
      '~ts-types': path.resolve(__dirname, 'src/ts-types'),
      '~reusables': path.resolve(__dirname, 'src/components/reusables'),
    },
  },
});
