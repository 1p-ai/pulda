// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://www.puldaunion.com',
  output: 'static',
  trailingSlash: 'always',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
