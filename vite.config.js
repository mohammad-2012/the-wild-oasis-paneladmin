import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  base: "/the-wild-oasis/",
  plugins: [react(), eslint()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});
