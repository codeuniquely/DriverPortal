// ========================================================
// Entry Script
// ========================================================
if (process.env.NODE_ENV === 'production') {
  console.log('WE ARE RUNNING PRODUCTION'); // eslint-disable-line no-console
  process.env.webpackAssets = JSON.stringify(require('./dist/manifest.json'));
  process.env.webpackChunkAssets = JSON.stringify(require('./dist/chunk-manifest.json'));
  // In production, serve the webpacked server file.
  require('./dist/server.bundle.js');
} else {
  // Babel polyfill to convert ES6 code in runtime
  require('babel-register')({
    "plugins": [
      [
        "babel-plugin-webpack-loaders",
        {
          "config": "./webpack.config.babel.js",
          "verbose": false // false
        }
      ]
    ]
  });
  require('babel-polyfill');
  require('./server/server');
}
