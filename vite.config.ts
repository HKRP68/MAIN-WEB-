
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname in ESM environment
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      /* Fix: Using the polyfilled __dirname to resolve the alias path */
      '@': path.resolve(__dirname, './'),
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
