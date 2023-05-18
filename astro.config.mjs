import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    tailwind(),
  ],
});
