import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
    //   preprocess: sveltePreprocess(),
    }),
  ],
  build: {
    // 库模式打包
    lib: {
      entry: 'src/index.ts', 
      name: 'trade-web-components',
      fileName: 'trade-web-components',
    },
    watch: {
      clearScreen: true,
    },
  },
});
