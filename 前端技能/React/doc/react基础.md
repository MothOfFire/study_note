# react基础

[返回](../React.md)

## 1 编程思想

### 1.1 React的设计理念

#### 1.1.1 单向数据流

- 数据与页面绑定
- 单向渲染

#### 1.1.2 虚拟DOM

- 在JS和真实DOM之间添加的

#### 1.1.3 组件化

- 有助于保持交互一致性
- 保持视觉风格的统一
- 便于程序员相互之间的协作

## 2 React组件

### 2.1 React.FC

- FC是function component函数组件，React函数式组件
- ```type React.FC< P = {} > = React.FunctionComponent< P >```：P是泛型参数，P = props
- props包含了React节点
