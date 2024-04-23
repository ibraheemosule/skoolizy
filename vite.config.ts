import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [react()],
  css: { postcss: { plugins: [tailwindcss()] } },
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      icons: '/src/assets/icons',
      assets: '/src/assets',
      router: '/src/router',
      utils: '/src/utils',
      'ts-types': '/src/ts-types',
      reusables: '/src/components/reusables',
    },
  },
});
