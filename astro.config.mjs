// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig(({ command }) => ({
  site: 'https://marcelo170690.github.io',
  base: command === 'build' ? '/me' : '/',
}));
