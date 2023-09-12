# React

## 环境

```bash

#全局安装脚手架工具
npm install -g create-react-app
create-react-app 项目名称

#可以使用npx直接创建react项目
npx create-react-app 项目名称 

#创建react+typescript项目
npx create-react-app 项目名称 --template typescript

cd 项目名称
#安装项目依赖
npm install
#运行项目
npm start

```

[react的项目结构](./doc/react项目结构.md)

## 将JavaScipt的react项目转换成支持TypeScript的项目

```bash

#安装TypeScript依赖
npm install --save typescript @types/node @types/react @types/react-dom @types/jest

```

- 然后将App.js文件的后缀名改为.tsx，并在该文件中导入react import React from 'react';
- 再将index文件的后缀名也改成.tsx后运行项目
- 项目会自动生成tsconfig.json文件

```bash

#安装react-icons插件
npm install react-icons

```

## 1 [react-scripts](./doc/react-scripts.md)

## 2 [react基础](./doc/react基础.md)

## 3 [react-hooks](./doc/react-hooks.md)
