const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist/js/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: './',
    host: 'localhost',
    port: '8081'
  },
  module: {
    loaders: [{
      enforce: "pre",
      test: /\.(js|jsx)/,
      loader: "eslint-loader",
      exclude: /node_modules/
    }],
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2017", "react"]
        }
      }, {
        test: /\.(scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
