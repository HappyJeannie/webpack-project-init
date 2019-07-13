const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const devWebpackConfig = merge(baseWebpackConfig,{
  devServer: {
    contentBase: path.resolve(__dirname,'../dist'),
    port: 8123,
    open: true
  },
  devtool: 'inline-source-map'
})

module.exports = devWebpackConfig
