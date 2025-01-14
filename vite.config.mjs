import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
export default defineConfig({
  build: {
    outDir: 'dist', // Direktori keluaran
    rollupOptions: {
      input: './index.html', // File HTML utama
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'js/**/*', // Salin semua file di folder js
          dest: 'js', // Tetap di folder js di dist
        },
      ],
    }),
  ],
});
