// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://engrc-3025.bryantpark.dev',
  integrations: [react()],
  experimental: { contentLayer: true }
});