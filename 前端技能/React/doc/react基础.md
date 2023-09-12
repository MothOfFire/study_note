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

- React.Component

```tsx

class ClassName extends React.Component {

}

/*
 * class React.Component< P = {}, S={}, SS = any>
 * P = props;
 * S ==> state组件状态
 * SS ==> 自定义数据
 */

```

State和Peops是控制页面变化的数据

#### 2.3.1 State

- state是组件的对内接口
- 用于组件内部数据传递
- 是私有的，可以认为state是组件的“私有属性”
- 需要用setState()来修改state；如果直接修改state，组件不会触发render函数，页面不会渲染
- 构造函数constructor是唯一可以初始化state的地方
- State的更新是异步的：调用setState后，state不会立刻改变，所以不要依赖当前的state来计算下一个state

#### 2.3.2 Props

- props是组件对外的接口
- 用于组件之间数据传递
- 本质上组件就是一个函数，而props就是传入函数的参数，是从父组件内部传向子组件的数据
- 所有的props都是只读属性的，都是Immutable对象

#### 2.3.3 Immutable

- 不变的
- 对象一旦创建就不可更改，只能通过销毁、重建来改变数据
- 通过判断内存地址是否一致来确定对象是否有经过修改

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

一般将资源统一存放在assets文件中，所以在src下创建assets文件夹

### 5.1 加载媒体资源与字体

#### 5.1.1 图片资源的加载

- 在assets文件夹下创建icons文件夹和images文件夹
- icons文件夹存放图标文件
- images文件夹存放图片
- 引用图片资源

```tsx

import logo from './assets/images/logo.svg';

<img src={ logo } alt="logo" className={styles.appLogo} />

```

#### 5.1.2 文字资源

- 在assets文件夹下创建fonts文件夹
- fonts文件夹存放字体资源
- 引用字体资源，先将字体资源拖入fonts文件夹，再在index.css文件中添加

```css

/*文字样式*/
@font-face {
  font-family: 'Slidefu';
  src: local('Slidefu') url(./assets/fonts/Slidefu-Regular-2.ttf) form('truetype');
}

```

## 6 React Event事件

本节介绍ReactEvent事件的事件处理和异步处理

### 6.1 事件处理

#### 6.1.1 React.MouseEven点击事件

```tsx

React.MouseEvent< HTNLButtonElement, MouseEvent >

/**
 * HTNLButtonElement ==> HTML按钮元素 
 * MouseEvent ==> 鼠标事件 
 */

handleClick = (e: React.MouseEvent< HTNLButtonElement, MouseEvent >) => {
  //封装的事件处理函数逻辑
  /**
   * 如果不使用箭头函数，函数体中的this就不是指向包含它的对象，而是它自己本身* 不过可以在constructor构造函数中通过this.handleClick = this.handleClick.bind(this)重新给handleClick绑定this
   */
}

onClick = {
  this.handleClick
}

//e: React.MouseEvent< HTNLButtonElement, MouseEvent >
//可以通过e.nativeEvent来访问原生的HTML事件

/**
 * e.target：事件发生的元素
 * e.currentTarget：事件处理绑定的元素
 */

```

- 泛型中的第一个参数指明了事件目标的类型，指示了事件所发生的元素的类型
- 泛型中的第二个参数指明了事件对象的类型，指示了事件对象的类型

### 6.2 异步处理

处理异步、动态显示

- AJAX阿贾克斯
- callback回调函数：建立一个程序栈，将回调函数以参数的形式安照先进先出的原则存放到程序栈中，依次执行代码的逻辑
- 使用回调函数容易导致回调地狱，使用promise可以有效避免回调地狱

#### 6.2.1 获取网络API数据

[获取假的json数据的网址](https://jsonplaceholder.typicode.com)

- 要想使用网络API的数据，需要先将App.tsx中的App由函数组件转换成类组件
- 定义好Props和State接口
- 在类组件中添加constructor构造函数和componentDidMount生命周期函数
- 在componentDidMount中对网络API的数据进行处理

```jsx

  constructor(props: Props) {
    super(props);
    this.state = {
      robotGallery: [],
    }
  }

  componentDidMount(): void {
    // fetch(参数是需要处理的props)
    fetch("https://jsonplaceholder.typicode.com/users")
        .then( (response) => response.json())
        .then( (data) => this.setState({robotGallery: data}));
  }

  /**
   * (response) => response.json()：是将json以外的数据过滤掉
   * (data) => this.setState({robotGallery: data})：是将过滤完的数据赋值给state.robotGallery
   */

```

#### 6.2.2 setState的异步开发

- setState方法是异步更新，同步执行
- setState方法本身不是异步的，但对state的处理机制个人一种异步的假象
- state处理一般发生在生命周期变化的时候

```tsx

//setState的异步开发
this.setState((preState, preProps) => {
    return { /** 
               * state更新的状态对象
               * preState：上一个状态的state对象
               * preProps：上一个状态的props对象
               */ }
  },
  () => {
    /* 异步处理函数 */
  }
)

/**
 * setState方法的第一个参数：一个对象，包含要更新的状态的一部分或全部。这个对象会与当前的状态进行合并，以产生新的状态。可以使用对象的形式来更新多个状态值。
 * setState方法的第二个参数（可选）：一个回调函数，在状态更新完成并且组件重新渲染后被调用。通常用于在状态更新完成后执行一些操作。
 */

```

## 7 生命周期
