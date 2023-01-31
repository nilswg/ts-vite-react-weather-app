import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import macrosPlugin from 'vite-plugin-babel-macros';
import url from 'url';
import path from 'path';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// console.log(__filename);
// console.log(__dirname);
// console.log(path.resolve(__dirname, 'src'));

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ts-vite-react-weather-app/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react(), macrosPlugin()],
});
