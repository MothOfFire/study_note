# TypeScript面向对象

[返回TypeScript](../TypeScript.md)

## 1 Object对象类型

- 对象类型的定义

```TypeScript
const object: {
    key1: string,
    key2:number
} = {
    key1: value1,
    key2: value2,
    //...
}

//调用对象的属性值
let keyValue = object.key1;

```

- 对象定义好后，里面的类型值就已经确定，当调用对象里面没有的属性时，编辑器会报错
- 它包含的属性不是键值对，而是键类型对
- object是any类型的一个子集

## 2 Interface接口

- 创建接口使用关键字interface

```TypeScript

let drawPoint = (point: Point) => {
    console.log({x: point.x, y: point.y});
}

drawPoint({x: 105, y: 50});
drawPoint({x: '105', y: '50'});//编辑器会报错


//创建接口
interface Point {
    x: number;
    y: number;
}

```

- 接口中定义的成员属性都是公有的属性

## 3 class类

- 创建类使用关键字class

```TypeScript

interface IPoint {
    // x: number;
    // y: number;
    drawPoint: () => void;//表示该函数没有返回值
    getDistances: (p: IPoint) => number;//表示该函数的返回值是number
    // getX: () => number;
    getY: () => number;
    // setX: (value) => void;
    setY: (value) => void;
    X: number;
    // Y: number;
}

class Point implements IPoint {
    //成员变量
    // x: number;
    // y: number;
    // constructor (x?: number, y?: number) {
    //     this.x = x;
    //     this.y = y;
    // }
    constructor (private x: number, private y: number) {
        this.x = x;
        this.y = y;
    }
    //成员方法
    drawPoint: () => {
        console.log("x: ", this.x, " y: ", this.y);
    }
    getDistances: (p: IPoint) => {
        return Math.pow(p.X - this.x, 2) + Math.pow(p.getY() - this.y, 2);
    }
    set X(value: number) {
        if(value<0) {
            throw new Erroe("X的value不能小于0");
        }
        this.x = value;
    }
    setY = (value: number) => {
        if(value<0) {
            throw new Erroe("X的value不能小于0");
        }
        this.x = value;
    }
    // set Y(value: number){
    //     if(value<0) {
    //         throw new Erroe("Y的value不能小于0");
    //     }
    //     this.y = value;
    // }
    get X() { 
        return this.x; 
    }
    getY = () => { 
        return this.x; 
    }
    // get Y() { 
    //     return this.y; 
    // }
}

//创建实例
const point = new Point();
point.drawPoint();
point.X = 10;//调用set X方法
console.log(point.X);//调用get X方法

```

- 对象object、类class和实例instance之间的关系：实例是使用new关键字 类名 所创建出来的对象
- 使用constructor关键字创建构造函数
- 构造函数不能重载，一个类中只有一个构造函数
- 在构造函数的参数前添加访问修饰符就可以自动添加成员变量

## 4 访问修饰符

- public：公有的，在类的外部、内部、子类中都可以直接访问
- private：私有的，只有在类的内部才能访问
- protected：受保护的，只有在类的内部和继承子类中可以访问

## 5 module模块

- 使用import { 需要导入的名称 } from '需要引入的文件路径';将导入写好的模块
- 导入时文件的后缀名不用写，且导入的语句要写在文件的最上方
- 使用export关键字可以将需要导出的类、变量、函数等从文件中导出来形成一个模块

## 6 Generics泛型

- 定义泛型：

```TypeScript

let lastInArray = <T>(arr: Array<T>) => {
    return arr[arr.length - 1];
}
// let lastInArray = <T>(arr: T[]) => {
//     return arr[arr.length - 1];
// }
const l1 = lastInArray([1, 2, 3]);
const l2 = lastInArray<string>(['1', '2', '3']);
const l2 = lastInArray<string | number>(['1', '2', 3]);//联合数据类型数组
//多泛型，Y的默认类型是number
let makeTuple = <T, Y = number>(x: T, y: Y) => [x, y];

const v1 = makeTuple(1, "one");
const v2 = makeYuple<boolean, number>(true, 1);
```

- 泛型是一个数据的模板
