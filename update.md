### 更新记录

#### 2019-07-15
* 使用 `url-loader` 解析 `js`、`css` 中的图片资源
* 使用 `html-withimg-loader` 解析 `html`中的图片资源，按照相对路径加载资源即可

#### 2019-07-13
* 提取开发/生产环境 `webpack` 公共配置
* 增加 `postcss-loader` 自动添加 `css3` 前缀，此处需要注意的是：
    * 1、在根目录添加 `postcss.config.js`
    * 2、配置文件中除了添加 `autoprefixer` ，还需要添加 `browsers` 设置，否则不生效


#### 2019-07-11
* 将 `webpack` 打包配置文件提取到单独的 `build` 目录下
* 增加 `devServer` 以支持本地开发环境编译调试
