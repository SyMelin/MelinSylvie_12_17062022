import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: '/MelinSylvie_12_17062022/',
      build: {
        outDir: 'build',
      },
      plugins: [react()],
    };
  });