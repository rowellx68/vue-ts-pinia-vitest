/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      pages: resolve(__dirname, 'src/pages'),
      routes: resolve(__dirname, 'src/routes'),
      stores: resolve(__dirname, 'src/stores'),
    },
  },
  plugins: [
    vue(),
  ],
})
