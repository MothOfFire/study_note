# nodeJS

## 环境

```bash

#验证是否安装成功
node -V
npm -V
#都出现版本号即说明安装成功

```

## 服务端调试 debug

### 1 debug

- bug 即错误
- debug 即排错，也叫调试
- 编程语言必须有成熟的 debug 机制，否则将不可用

### 2 debug 的重要性

- 程序出 bug 很常见，因此 debug 也经常使用
- 程序出 bug 后得需要代码是如何运行出错的

### 3 inspect 调试法

- 修改 package.json 的 script 选项，在 dev 选项中增加 --inspect=9229 后启动服务
- 打开 chrome 访问 chrome://inspect
- 在代码中增加 debugger（断点）重启服务，即可调试

## nodeJS 与前端 JS 的区别

- 都用 JS 语法
  
  - 变量的定义和类型
  - 函数的定义和执行
  - ES6 的 class Promise 等语法
- Web API：前端页面的 DOM BOM 事件 Ajax 等，前端 JS 可以使用，因为是浏览器环境；nodeJS 无法使用，因为是 node 环境
- nodeJS API：处理http，nodeJS 可以使用，因为是 node 环境；前端 JS 无法使用，因为是浏览器环境
- 前端 JS = JS 语法 + Web API
- nodeJS = JS 语法 + nodeJS API

## 1 [npm](./doc/npm.md)

## 2 [common模块化.js](./doc/common.js模块化.md)

## 3 [nodeJS处理HTTP](./doc/nodeJS处理HTTP.md)
