# npm

## npm介绍

- npm：node package manager，是nodejs软件包管理者
- [npm英文官网](https://www.npmjs.com/)
- npm会随着nodejs一起被安装

```bash

#初始化环境
npm init 

#安装lodash
npm install lodash --save

#安装nodemon
npm install nodemon --save-dev

```

- --save与--save-dev的区别：使用--save安装的包在package.json配置文件中显示在dependencies选项中，该选项保存的是你下载安装的依赖包，它是可以直接在代码中用require引用；而使用--save-dev安装的依赖在package.json配置文件中显示在devDependencies选项中，它不可以直接在代码中用require引用，它需要在script选项中添加dev选项后在命令行中通过npm run dev来运行
