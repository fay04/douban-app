# douban-app

项目目录说明

```
|-- config                           // 项目开发环境配置
|   |-- index.js                     // 项目打包部署配置
	|-- dev.env.js                //项目生产环境的部署

	|-- pro.env.js                //项目开发的部署
|-- src                              // 源码目录
|--|-- common               // 公共icon js css vue 等
|   |-- components                   // 公共组件
|       |-- bookmovie               // 书影音
|       |-- broadcast               // 广播

|       |-- index               //首页

|       |-- me               //我的

|       |-- nav               //导航条

|       |-- team               //小组

|       |-- config               //配置文件
|           |--  env.js                       //设置baseUrl

|           |--  fetch.js                       //封装ajax请求

|           |--  mUtil.js                       //公共组建

|           |--  rem.js                       //自适应
|   |-- router                       // 路由配置和程序的基本信息配置
|       |-- index.js                // 配置页面路由
|   |-- service                       // 页面数据
|       |-- getData.js                // 封装页面数据获取

|       |-- tempdata                // 页面数据
|   |-- store                       // vuex的状态管理
|   |-- App.vue                         // 页面入口文件

|   |-- main.js                         //  程序入口文件，加载各种公共组件
|-- index.html                       // 项目入口html文件
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
|-- webpack.config.js                // 程序打包配置
|-- .babelrc                         // ES6语法编译配置

|-- .eslintrc.js                         // eslint 
.
```


> vue app

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
