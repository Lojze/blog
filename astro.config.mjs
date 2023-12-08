import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com"
  site: "http://10.181.16.47:4321/",
  integrations: [preact()]
});