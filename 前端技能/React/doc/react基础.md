# react 基础

[返回](../React.md)

## 1 编程思想

### 1.1 React 的设计理念

#### 1.1.1 单向数据流

- 数据与页面绑定
- 单向渲染

#### 1.1.2 虚拟 DOM

- 在 JS 和真实 DOM 之间添加的

#### 1.1.3 组件化

- 有助于保持交互一致性
- 保持视觉风格的统一
- 便于程序员相互之间的协作

## 2 React 组件化

本节介绍关于React的组件化

### 2.1 React.FC

- FC 是 function component 函数组件，React 函数式组件
- `type React.FC< P = {} > = React.FunctionComponent< P >`：P 是泛型参数，P = props
- props 包含了 React 节点

### 2.2 React 的 CSS module（CSS模组化）

#### 2.2.1 架构项目中的样式文件

- 文件的位置：css 文件与 component 文件放在同一个目录下
- 命名规范：compontent 文件名.module.css

#### 2.2.2 CSS module(CSS模组化)

- 每个 jsx 或者 tsx 文件都被视为一个单独存在的原件
- 原件所包含的所有内容也同样都应该独立存在
  `import './index.css => import style from './index.css'`
- 在 React 中想使用 css 的 class 样式，必须用 className 来取类名
- 引入 CSS 的两种方式：
  - 直接引入整个css文件：

  ```jsx
  import './index'  
  <div className= "app"></div>
  ```

  - JSS模块化依然组件：

  ```jsx
  import style from './index' 
  <div className= {style.app}></div>
  ```

- 在TypeScript中使用

```Bash

#安装插件
npm install typescript-plugin-css-modules --save-dev

```

在tsconfig.json文件中注册插件，在compilerOptions选项中添加

```json

    "plugins": [
      {
        "name": "typescript-plugin-css-modules"
        }
    ],

```

然后在项目的根目录下创建.vscode文件夹/settings.json文件添加以下代码后就可以对css对象有智能提示

```json

{
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
}

```

### 2.3 class类组件

## 3 JSX 编程思维

- JSX 并不是标准的 js 语法，它是 React 自创的一门语言
- 在.js 文件中使用标准的 JS 语法，而 React 语法用在.jsx 文件中
- React 项目中使用.jsx 或者.js 都可以
- React 并不强制使用 JSX，也可以使用原生的 JavaScript
- React 认为视图的本质是渲染逻辑与 UI 视图表现的内在统一
- React 把 HTML 与渲染逻辑进行了耦合，形成了 JSX

### 3.1 JSX 的特点

- 常规的 HTML 代码都可以与 JSX 兼容
- 可以在 JSX 中嵌入表达式
- 使用 JSX 指定子元素

### 3.2 JSX 的命名约定

- 使用 camelCase(小驼峰)方式定义属性：例如 class 变成了 className，而 tabindex 变成 tabIndex
- JSX 的自定义属性，以 data-开头
- JSX 的本质是一个对象：JSX 会被编译为 React.createElement()对象

### 3.3 如何防止 XSS 攻击 -- 《JavaScript 王者归来》

- 使用花括号直接引用渲染内容的时候，React 会自动转义，这种情况 React 只能防止直接注入 html 代码的攻击，只要将攻击代码写入函数中就会被攻破

### 3.4 TSX

- 文件扩展名：.tsx
- 在配置文件中 tsconfig.json 启用 jsx 选项

## 4 TS 的定义声明

- \*.d.ts
- 只包含类型声明，不包含逻辑
- 不会被编译，也不会被 webpack 打包

## 5 资源配置

### 5.1 加载媒体资源与字体

## 6 事件

### 6.1 事件处理

### 6.2 异步处理

## 7 生命周期
