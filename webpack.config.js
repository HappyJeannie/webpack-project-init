const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      tempFilePath: path.resolve(__dirname, './index.html')
    })
  ],
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, './dist')
  }
}
