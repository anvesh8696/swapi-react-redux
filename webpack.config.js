var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve('public/'),
    filename: 'js/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: 'public',
    historyApiFallback: true
  },
  resolveLoader: { root: path.join(__dirname, 'node_modules') },
  module: {
    preLoaders: [
      {
        test: /^((?!config).)*\.js?$/,
        exclude: 'node_modules',
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /^((?!config).)*\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot','babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
      },
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff&name=assets/[hash].[ext]" },
      { test: /\.ttf(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?name=assets/[hash].[ext]" },
      { test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,    loader: "file-loader?name=assets/[hash].[ext]" },
      {
        test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /images/,
        loader: "file-loader?name=assets/[hash].[ext]"
      },
      {
        test: /\.(svg|jpg|png)$/,
        exclude: /node_modules/,
        loader: "url?limit=1048576&name=assets/[hash].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
