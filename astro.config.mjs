import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gakkou-sozai-lab.com', // 仮
  integrations: [sitemap()]
});