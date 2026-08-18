import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom") || id.includes("react-scroll")) {
              return "vendor-react";
            }
            if (id.includes("framer-motion") || id.includes("lenis")) {
              return "vendor-animation";
            }
            if (id.includes("lucide-react") || id.includes("@radix-ui")) {
              return "vendor-ui";
            }
            return "vendor-others";
          }
        },
      },
    },
  },
});
