import { Addon } from '@embroider/addon-dev/rollup';
import { babel } from '@rollup/plugin-babel';

const addon = new Addon({
  srcDir: 'src',
  destDir: 'dist',
});

export default {
  output: addon.output(),

  plugins: [
    addon.publicEntrypoints([
      '**/*.js',
      'index.ts',
      'template-registry.ts',
      'test-support.ts',
    ]),

    addon.appReexports([
      'components/**/*.js',
      'helpers/**/*.js',
      'modifiers/**/*.js',
      'services/**/*.js',
    ]),

    addon.dependencies(),

    babel({
      babelHelpers: 'bundled',
      configFile: './babel.config.mjs',
      extensions: ['.gjs', '.gts', '.js', '.ts'],
    }),

    addon.hbs(),

    addon.gjs(),

    addon.declarations(
      'declarations',
      'pnpm ember-tsc --declaration --project tsconfig.json',
    ),

    addon.keepAssets(['**/*.css']),

    addon.clean(),
  ],
};
