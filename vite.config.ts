
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // Disabled componentTagger for Node.js v16 compatibility
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add specific esbuild options for Node.js v16 compatibility
  esbuild: {
    // Avoid using latest syntax features
    target: 'es2020'
  },
}));
