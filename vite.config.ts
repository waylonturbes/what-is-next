import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(),
    Unocss({
      presets: [presetUno(), presetIcons()],
      variants: [
        (matcher) => {
          const [, attribute = "", value = ""] =
            matcher.match(/^\[([^\/]+)\/?(.*)\]:/) ?? [];
          if (!attribute) {
            return { matcher };
          }
          const attributeValue = value ? `="${value}"` : value;
          return {
            matcher: matcher.replace(/^\[.+\]:(.*)$/, "$1"),
            selector: (s) => `[${attribute}${attributeValue}]${s}`,
          };
        },
      ],
    }),
  ],
});
