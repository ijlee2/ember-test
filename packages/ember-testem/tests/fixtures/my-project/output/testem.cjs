'use strict';

module.exports = {
  browser_args: {
    Chrome: {
      ci: [
        // --no-sandbox is needed when running Chrome inside a container
        process.env.CI ? '--no-sandbox' : null,
        '--headless',
        '--disable-dev-shm-usage',
        '--disable-software-rasterizer',
        '--mute-audio',
        '--remote-debugging-port=0',
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
  browser_start_timeout: 120,
  disable_watching: true,
  framework: 'jasmine2',
  launch_in_ci: ['Chrome'],
  src_files: ['tests/**/*-test.js'],
};
