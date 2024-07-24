import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://example.com/',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
});
