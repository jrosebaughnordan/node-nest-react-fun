import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 5173,
    // proxy API calls to our backend during dev
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
