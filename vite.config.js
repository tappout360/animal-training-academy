import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3050,
    open: false
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/dexie') || id.includes('node_modules/canvas-confetti')) {
            return 'vendor-utils';
          }
          if (id.includes('src/data/speciesPacks')) {
            return 'species-curricula';
          }
          if (id.includes('src/data/game')) {
            return 'game-catalog';
          }
        }
      }
    }
  }
});
