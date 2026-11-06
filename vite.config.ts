import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
// base: './' keeps asset paths relative so the production build
// also works when hosted from a sub-folder (e.g. GitHub Pages project sites).
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2020',
    cssMinify: true,
  },
});
