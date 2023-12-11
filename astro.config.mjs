import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import deno from '@astrojs/deno';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // site: "https://example.com"
  site: "https://lojzebolg.deno.dev/",
  integrations: [preact(), tailwind()]
});