import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // Route all backend calls and methods over to Frappe Bench
      '/api': {
        target: 'http://artvisionoptical.lan',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Compiles assets directly into the Frappe public asset folder
    outDir: path.resolve(__dirname, '../optical_app/public/dist'),
    emptyOutDir: true,
    assetsDir: 'assets',
  },
});