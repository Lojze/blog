import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import deno from "@astrojs/deno";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com"
  site: "https://lojzebolg.deno.dev",
  // import.meta.url
  integrations: [preact(), tailwind(), sitemap()]
});