import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [
    sveltekit({
      adapter: adapter({
        pages: 'preview/site',
        assets: 'preview/site',
        strict: true,
      }),
      extensions: ['.svelte', '.svx'],
      preprocess: [
        vitePreprocess(),
        mdsvex({
          extensions: ['.svx'],
          layout: {
            runbook: resolve('src/lib/layouts/runbook.svelte'),
          },
        }),
      ],
    }),
  ],
});
