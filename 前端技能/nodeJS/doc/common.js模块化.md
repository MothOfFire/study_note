# common.js

[返回](../nodeJS.md)

## 1 common.js 语法

- 主要用于 nodeJS 开发
- 通过 module.exports 导出模块
- 通过 require(...) 来导入模块

### 1.1 require(...) 的三个层级

- 系统自带模块
- npm 包，通过 npm 安装的模块
- 自定义模块

## 2 common.js 与 ES6 Module 的区别

- 两者的语法不同：common.js 是使用 module.exports 导出模块，require(...) 导入模块；ES6 Module是使用 export 或者 export default 导出模块，import ... from ...导入模块
- common.js 是执行时引入，动态的；ES6 Module 是打包时提前引入，静态的

## 3 为什么要使用模块化

- 模块拆分开，便于代码组织和管理
- 便于多人协作开发，各写各的互不干扰
- 成熟的语言都支持模块化
