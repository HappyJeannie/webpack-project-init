const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const env = process.env.NODE_ENV
console.log(env)
module.exports = {
  entry: path.resolve(__dirname, '../src/pages/index.js'),
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, '../dist')
  },

  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          {
            loader:MiniCssExtractPlugin.loader,
            options:{
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    alias:{
      '@assets': path.resolve(__dirname,'../src/assets'),
      '@utils': path.resolve(__dirname,'../src/utils'),
      '@api': path.resolve(__dirname,'../src/api'),
      '@src': path.resolve(__dirname,'../src')
    }
  }
}
