import { loadTranslations } from '@ember-intl/vite';
import { extensions, ember } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

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
    // @ts-expect-error: Incorrect type
    ember(),
    babel({
      babelHelpers: 'inline',
      extensions,
      parallel: true,
    }),
    loadTranslations(),
  ],
});
