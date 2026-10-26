import { loadTranslations } from '@ember-intl/vite';
import { compatPrebuild, ember, extensions } from '@embroider/vite';
import { babel } from '@rollup/plugin-babel';
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: 'my-v2-app-strict__[hash]-[local]',
    },
  },
  // Scan all files in `/app` so that Vite pre-bundles dependencies from code-split routes
  optimizeDeps: {
    entries: ['app/**/*.{gjs,gts,js,ts}', 'index.html'],
  },
  plugins: [
    compatPrebuild(),
    ember(),
    babel({
      babelHelpers: 'runtime',
      extensions,
      parallel: true,
    }),
    loadTranslations(),
  ],
});
