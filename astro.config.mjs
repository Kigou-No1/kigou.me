// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from "url";
import path, { dirname } from 'path';

const __fileName = fileURLToPath(import.meta.url);
const __dirName = dirname(__fileName)

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://kigou.me",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  vite: {
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirName, "src")}`
      }
    }
  }
});