import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/MySync/", // ✅ updated from "/MySync./"
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
