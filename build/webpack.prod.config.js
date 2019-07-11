const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, './dist')
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
          }
          ,'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      tempFilePath: path.resolve(__dirname, './index.html')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    alias:{
      '@assets': path.resolve(__dirname,'./src/assets'),
      '@utils': path.resolve(__dirname,'./src/utils'),
      '@api': path.resolve(__dirname,'./src/api'),
      '@src': path.resolve(__dirname,'./src')
    }
  }
}