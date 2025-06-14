import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

// instead of postcss plugin, new dedicated Vite plugin is now used
export default defineConfig({ plugins: [tailwindcss()] });
