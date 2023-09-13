# react-hooks

## 1 钩子函数的概念

### 1.1 钩子hooks

- 由于有些类组件冗长而且复杂，难以复用，所以React创造了hooks，目的就是为了给函数式组件加上状态
- hooks是消息处理的一种方法，用来监视指定程序
- 函数组件中需要吹副作用，可以用钩子把外部代码“钩”进来
- hooks一律使用use前缀命名：useXxx
- hooks本质是一类特殊的函数，为你的函数型式组件（function component）注入特殊的功能
- 只能在函数式组件上使用

### 1.2 useState 状态钩子

- React自带的一个hooks函数，声明组件状态
- 参数可以设置state的初始值( initaial state )
- 返回值是一个只有两个元素的数组：[ 状态，状态更新函数 ]

```tsx

//引入useState
import { useState } from 'react';

//只能在函数式组件使用
const App = (props) => {
    const [ 状态，状态更新函数 ] = useState(状态初始值);
    /**
     * 状态是state中的属性名
     * 状态更新函数一般写成setXxx的形式，Xxx是state中的属性名首字母大写
     */
}

```

### 1.3 useEffect 副作用钩子

- 可以取代生命周期函数componentDidMount,componentDidUpdate，componentWillUnmount
- 给函数式组件添加副作用（ side effect ）

### 1.3.1 纯函数 pure function

- 给一个函数同样的参数，这个函数如果永远返回同样的结果，那么这个函数就是纯函数
- React组件输入相同的参数（props），渲染UI应该永远一样

#### 1.3.2 副作用 Side-effect

- 与纯函数相反，指一个函数处理了与返回值无关的事情
- 输入参数一样，而输出结果不确定的情况就是副作用
- 副作用不一定是一件坏事，很多代码必须借助副作用才能实现，例如：AJAX，修改DOM，console.log，而在React中state状态的改变，生命周期，构建函数也都需要副作用才能实现
- 副作用会给系统添加不可控因素

#### 1.3.3 使用useEffect异步获取数据

- useEffect函数的第一个参数是一个函数，用于描述副作用的逻辑。这个函数会在组件渲染完成后执行，可以包含任何需要在组件渲染后执行的代码。副作用函数可以返回一个清除函数，用于清理副作用。
- useEffect函数的第二个参数是状态列表，一个数组，用于指定副作用函数的依赖项。只有当依赖项发生变化时，副作用函数才会被重新执行；如果省略该参数，就是在模拟componentDidUpdate，函数将在每次组件渲染完成后都被执行；当第二个参数为空数组时，副作用函数将只在组件初次渲染完成后执行一次，且不会再被重新执行。

```tsx

useEffect(() => {
    document.title = `点击${count}次`;
}, [count]);

 const [robotGallery, setRobotGallery] = useState< any >([]);
 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setRobotGallery(data));
  }, []);

```

#### 1.3.4 使用useEffect的注意事项

- 在去掉第二个参数的时候，副作用函数在页面的每一次渲染都会执行，如果副作用函数是用于获取API数据，会导致副作用函数不断获取数据导致恶性循环，要避免这种循环，要在第二个参数上添加空数组

### 1.4 常用的自带的Effect Hooks

- useContext
- useReducer
- useCallback
- useRef
- useLayoutEffect
- useDebugValue：

## 2 全局数据传递

### 2.1 React上下文 Context

- 通过createContext函数创建上下文，函数要求我们必须有一个默认初始值，并将默认初始值作为函数的参数
- 要用appContext.Provider将要传递数据的组件包裹起来

```tsx

const defaultContextValue = {
  name: "hua"
}

//通过createContext函数创建上下文，函数要求我们必须有一个默认初始值
export const appContext = React.createContext(defaultContextValue);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <appContext.Provider value={defaultContextValue}>
      <App />
    </appContext.Provider>
  </React.StrictMode>
);

```

- 在要接收数据的组件中先引入创建好的Context
- 在用Consumer将要接收的组件包裹起来，并将组件写在箭头函数的返回值内

```tsx
//引入index的context
import { appContext } from '../index';


const Robots: React.FC<RobotsProps> = ({id, name, email}) => {
    
    return (
        <appContext.Consumer>
            {
                (value) => {
                    return (
                        <div className={styles.cardContainer}>
                            <img src={`https://robohash.org/${id}`} alt="robot"  />
                            <h2>{ name }</h2>
                            <p>{ email }</p>
                            <p>作者：{value.name}</p>
                        </div>
                    )
                }
            }
        </appContext.Consumer>
    )
};

```

### 2.2 使用useContext接收Context

```tsx

import { appContext } from '../index';
import { useContext } from 'react';

const Robots: React.FC<RobotsProps> = ({id, name, email}) => {
    const value = useContext(appContext);
    return (
            <div className={styles.cardContainer}>
                <img src={`https://robohash.org/${id}`} alt="robot"  />
                <h2>{ name }</h2>
                <p>{ email }</p>
                <p>作者：{value.name}</p>
            </div>
    )
};

```

### 2.3 组件化Context Provider

- 先在src文件夹下创建AppState.tsx文件，在该文件中创建全局State和上下文关系context provider

```tsx



```

## 3 高阶组件HOC

## 4 自定义组件
