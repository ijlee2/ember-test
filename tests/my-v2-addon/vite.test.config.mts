import { loadTranslations } from '@ember-intl/vite';
import { defineConfig } from 'vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        tests: 'tests/index.html',
      },
    },
    sourcemap: true,
  },
  plugins: [
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions,
    }),
    loadTranslations(),
  ],
});
