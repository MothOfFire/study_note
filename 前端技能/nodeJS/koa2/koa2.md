# koa2

- koa2 是 nodeJS web server 框架

## 1 环境

- 安装

```bash

#初始化
npm init

#安装
npm install koa --save

```

- 使用脚手架搭建koa2项目

```bash

#安装脚手架
npm install -g koa-generator

koa 项目名

npm install

#运行
npm run dev

```

## 2 中间件

- 一个流程上的独立业务模块
- 它可拓展、可插拔
- 拆分业务模块，使代码清晰
- 统一使用中间件，使各业务代码都规范标准
- 扩展性好，易添加、易删除
- koa的代码、app.use(...)、路由都是中间件
- 中间件机制是koa的精髓
- 每个中间件都是async函数

## 3 洋葱圈模型

- 中间件的运行机制像一个洋葱圈
- 与中间件模型的关系：中间件机制是业务模块的划分；洋葱圈模型是中间件的执行机制，两者要分开来看不要混在一起
