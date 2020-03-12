import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'danzerpress',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'node_modules/danzerpress-layouts/src/styles/variables/_variables.scss',
        './node_modules/danzerpress-layouts/src/styles/mixins/_mixins.scss'
      ]
    })
  ],
  globalStyle: './node_modules/danzerpress-layouts/src/styles/main.scss'
};
