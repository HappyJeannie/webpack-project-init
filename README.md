## 一、基本概念
### 1、Loaders
webpack开箱即用只支持 JS / JSON 两种类型文件，通过 Loaders 去支持其他文件类型并把他们转换成有效的模块，并可以添加到依赖图中。常用 Loaders 如下：

|序号|名称|描述|
|:----:|:----:|:----|
|1|`babel-loader`|转换 `ES6/7`等JS新特性语法|
|2|`css-loader`|支持`.css`文件的加载和解析|
|3|`less-loader`|将`less`转为`css`|
|4|`ts-loader`|将`TS`转为`JS`|
|5|`file-loader`|进行图片、字体的打包|
|6|`raw-loader`|将文件以字符串形式导入|
|7|`thread-loader`|多进程打包`JS`和`CSS`|

### 2、Plugins
插件用于`bundle`文件的优化，资源管理和环境变量注入，作用于整个构建流程。常用`plugins`如下：

|序号|名称|描述|
|:----:|:----:|:----|
|1|`CommonsChunkPlugin`|将`chunks`相同的模块代码提取成公共`js`|
|2|`CleanWebpackPlugin`|清理构建目录|
|3|`ExtractTextWebpackPlugin`|将`CSS`从`bundle`文件里提取成一个独立的`CSS`文件|
|4|`CopyWebpackPlugin`|将文件或文件夹拷贝到构建的输出目录|
|5|`HtmlWebpackPlugin`|创建`html`文件去承载输出的`bundle`|
|6|`UglifyjsWebpackPlugin`|压缩`JS`|
|7|`ZipWebpackPlugin`|将打包出的资源生成一个`zip`包|

### 3、Mode
`Mode`用来指定当前的构建环境是：`production`、`development`还是`none`。设置`mode`可以使用`webpack`内置的函数，默认为`production`。在`webpack@4.x`版本使用。`Mode`内置函数如下：

|序号|选项|描述|
|:----:|:----:|:----|
|1|`development`|设置`process.env.NODE_ENV`的值为`development`，开启`NamedChunksPlugin`和`NamedModulesPlugin`|
|2|`production`|设置`process.env.NODE_ENV`的值为`production`，开启`FlagDependencyUsagePlugin`、`FlagIncludedChunksPlugin`、`ModuleConcatenationPlugin`、`NoEmitOnErrorsPlugin`、`OccurrencOrderPlugin`、`SideEffectsFlagPlugin`、`TerserPlugin`|
|3|`none`|不开启任何优化项|

## 二、语法解析
### 1、`babel-loader`使用
在`webpack.config.js`的`module.rules`添加以下配置项：
```javascript
rules: [
  {
    test: /\.js$/,
    use:'babel-loader'
  }
]
```
除此之外，还需要在项目根目录下添加`babel-loader`配置文件`.babelrc`:
```javascript
{
  "presets":["@babel/preset-env"]
}
```
如果要解析`React`语法，需要先安装`@babel/preset-react`，然后在`.babelrc`的`presets`中添加：
```javascript
{
  "presets":["@babel/preset-env","@babel/preset-react"]
}
```

### 2、解析`CSS`
* `css-loader` 用于加载`.css`文件，并且转换成`commonjs`对象
* `style-loader` 将样式通过`<style>`标签插入到`head`中
* `less-loader` 用于将`less`转换成`css`

在配置文件中添加如下`rules`：
```javascript
rules: [
  ...
  {
    test: /\.css$/,
    use: ['style-loader','css-loader']
  }
  ...
]
```
此处有一点需要注意，`loader`是链式调用，所以`use`的执行顺序是从右到左的，所以需要先写`style-loader`再写`css-loader`，这样就会先使用`css-loader`去解析`css`，再将解析好的`css`传递给`style-loader`，

