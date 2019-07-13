const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')

const prodWebpackConfig = merge(baseWebpackConfig,{
  output: {
    publicPath: "./"
  }
})

module.exports = prodWebpackConfig
