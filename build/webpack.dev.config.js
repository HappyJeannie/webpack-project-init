const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
console.log(`HOST:${HOST}`)
console.log(`PORT:${PORT}`)
const devWebpackConfig = merge(baseWebpackConfig,{
  devServer: {
    contentBase: path.resolve(__dirname,'../dist'),
    port: 8123,
    open: true
  },
  devtool: 'inline-source-map'
})

module.exports = devWebpackConfig
