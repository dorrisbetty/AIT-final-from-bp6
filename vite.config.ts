import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/AIT-final-from-bp6/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
