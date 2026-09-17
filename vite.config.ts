import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Custom domain (allindiataxiservice.in) is configured on GitHub Pages,
// so the site is served from root. GitHub redirects the github.io URL to the custom domain.
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
