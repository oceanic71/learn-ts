/* eslint-env node*/
const path = require('path');

const PATH_BUILD = path.resolve(__dirname, './dist');

module.exports = {
  entry: './src/index.ts',
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     jQuery: 'jquery',
  //     $: 'jquery',
  //     jquery: 'jquery',
  //     Popper: ['popper.js', 'default']
  //   }),
  // ],
  resolve: { extensions: ['.ts', "*", ".js", ".jsx", ] },
  output: {
    filename: 'index.js',
    publicPath: '/dist/',
    path: PATH_BUILD
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: { presets: ["@babel/env"] }
          },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ],
      },

      {
        test: /\.jpg$/,
        use: [
          { loader: 'file-loader?name=assets/[name].[ext]' }
        ]
      },

      {
        test: /\.(ttf|woff|svg|eot|otf)$/,
        use: [
          { loader: 'file-loader?name=assets/fonts/[name].[ext]' }
        ]
      },

      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/sounds/[name].[ext]',
            },
          }
        ]
      },

      {
        test: /\.html$/,
        use: ['file-loader?name=[name].[ext]']
      },
    ]
  }

};