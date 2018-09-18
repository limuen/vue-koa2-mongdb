#移动商城
一个以vue开发的移动电子商城

#技术栈
Vue2：采用最新Vue2的语法
vue-router：管理单页面应用路由
node:后端服务
koa2:后端框架
mongoDB:数据库
mongoose:数据建模库（连接mongoDB）
axios：发起http请求
Webpack：自动化构建工具，主要配置vue-cli脚手架提供。
ES6：采用ES6语法。
功能介绍
功能
首页
分类
购物车
会员中心
登录
注册
UI框架统一为vant
安装运行（安装运行前请确定已安装node环境）
环境安装：npm install
启动服务：npm run dev
压缩代码：npm run build
node版本: ">=6.0"
#本地运行注意事项
- clone下来 先在C盘新建data文件夹 data文件夹内新建db文件夹
- 执行appApi下内的方法获取数据
- 再启动mongoDB，进入项目内service文件夹下
- 再输入node index.js 命令启动连接数据库
- npm run dev 启动服务即可
#项目构成
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
