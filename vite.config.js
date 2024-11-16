import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  optimizeDeps: {
    include: ['@fontsource/roboto-flex']
  },
  assetsInclude: ['**/*.ttf', '**/*.jpg'],
  base: "/green_website/",
  server: {
    host: "0.0.0.0",
    port: 3612,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "lib",
        replacement: resolve(__dirname, "lib"),
      },
    ],
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        pure_funcs: ['console.log'] 
      },
      format: {
        comments: false
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'query-vendor': ['@tanstack/react-query'],
          'ui-components': [
            '@/components/ui/sonner',
            '@/components/ui/tooltip'
          ],
          'styles': ['@/index.css']
        }
      }
    },
    sourcemap: true,
    cssCodeSplit: true,
  }
});
