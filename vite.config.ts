// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { plugin as markdown } from 'vite-plugin-markdown';

export default defineConfig({
  plugins: [
    react(),
    markdown()
  ],
  // Add type declaration for .md files
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['@/lib/utils'],
        }
      }
    },
    cssCodeSplit: true,
    chunkSizeWarningLimit: 500
  }
});