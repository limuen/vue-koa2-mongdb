# 移动商城<br>
一个以vue开发的移动电子商城

### 技术栈
Vue2：采用最新Vue2的语法<br>
vue-router：管理单页面应用路由<br>
node:后端服务<br>
koa2:后端框架<br>
mongoDB:数据库<br>
mongoose:数据建模库（连接mongoDB）<br>
axios：发起http请求<br>
Webpack：自动化构建工具，主要配置vue-cli脚手架提供。<br>
ES6：采用ES6语法。<br>
功能介绍<br>
功能<br>
首页<br>
分类<br>
购物车<br>
会员中心<br>
登录<br>
注册<br>
UI框架统一为vant<br>
### 安装运行（安装运行前请确定已安装node环境）

环境安装：npm install<br>
启动服务：npm run dev<br>
压缩代码：npm run build<br>
node版本: ">=6.0"


### 项目构成
```
├── build                           // 构建服务和webpack配置
├── config                          // 项目不同环境的配置
├── dist                            // 项目build目录
├── index.html                      // 项目入口文件
├── package.json                    // 项目配置文件
├── static                          // 放置静态资源
├── service                         // 接口服务器配置
├── src                             // 生产目录
│   ├── api                         // api请求
│   ├── assets                      // 图片资源
│   ├── components                  // 各种组件
│   ├── filter                      // 过滤器
│   ├── router                      // 路由配置
│   ├── App.vue                     // 主页面
│   ├── main.js                     // Webpack 预编译入口
│   ├── serviceAPI.config           // 网络请求
└──
```
