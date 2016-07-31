module.exports = function(config) {
  config.set({
    basePath: './client',
    browsers: ['Chrome', 'PhantomJS'],
    files: [
      './node_modules/sinon/pkg/sinon.js',
      './node_modules/jasmine-sinon/lib/jasmine-sinon.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/promise-polyfill/Promise.js',
      '**/*.spec.js'
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.spec.js': ['webpack']
    },
    reporters: ['kjhtml'],
    webpack: {
      module: {
        loaders: [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.json$/, loader: "json-loader" }
        ]
      },
      watch: true,
      resolve: {
        extensions: ['', '.js']
      }
    },
    webpackServer: {
      noInfo: true
    },
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true
  });
};
