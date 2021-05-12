# 使用

## 安装依赖

    npm i or yarn

## 运行

    普通运行：npm run serve
    按环境运行：npm run dev-local

## 打包

    npm run build

# 目录结构

├─dist\* // 打包结果

├─mocks // 将本地的接口代理到 dev 服务器

│ │ └─src

│ │ ├─api // 业务处理层, 收集不同 store 上的方法与数据, 提供给 containers 层进行注入

│ │ ├─assets // 静态资源

│ │ ├─components // 通用组件

│ │ ├─library // 自己封装的组件

│ │ ├─plugins // 第三方插件（js、按需引用的 UI 组件）

│ │ ├─router // 路由配置

│ │ ├─store // store 目录, 负责存储数据、响应更改等

│ │ ├─utils // 工具函数

│ │ ├─view // 业务界面

├─static // 静态资源

├─test // 代码测试

├─.babelrc // babel 配置文件

├─.eslintrc // eslint 代码规则检查配置文件

├─.gitignore // git 忽略提交文件配置

├─.eslintignore // eslint 忽略检验文件配置

├─.env.dev-\* // 不同环境读取变量配置，配合启动命令使用，例如："dev-local": "vue-cli-service serve --mode dev-local",

# 特点

1. 开箱即用
2. 自动格式化代码
3. rem 自适用 // 需要配置 src/plugins/lib-flexible-2.0/index.js，如果想要将第三方插件 px 转为 rem，需要在 vue.config.js->postcss 中配置
4. 按环境加载变量 // 需要配合运行指令，例如 npm run dev-local，就会把.env.dev-local 里面的变量挂载到 process.env 上
5. .....
   ​
   See [Configuration Reference](https://cli.vuejs.org/config/).

## 1rem === 100px
