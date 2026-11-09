import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://a-kors.github.io',
  base: '/mikova-demo/',
  build: {
    inlineStylesheets: 'auto',
  },
});
