# TypeScript进阶

## 1 TypeGuards类型守卫

```TypeScript

type Square = {
    size: number;
}

type Rectangle = {
    width: number;
    hight: number;
}

type Shape = Square | Rectangle;

//使用is关键词明确类型
function isSquare(shape: Shape): shape is Square {
    return "size" in shape;
}

function isRectangle(shape: Rectangle): shape is Rectangle {
    return "width" in shape;
}

function area(shape: Shape) {
    if(isSquare(shape)) {
        return shape.size * shape.size;
    }
    if(isRectangle(shape)) {
        return shape.width * shape.hight;
    }
}

```

## 2 FunctionOverloading函数重载

- 同样的函数使用不同的函数签名，就是函数的重载
- 函数的重载是在编译时进行的，不是在运行时进行
- 在TypeScript中对于函数的声明是不参与输出的

```TypeScript

//对于函数的声明，
function reverse(string: string): string;
function reverse(string: string[]): string[];

function reverse(stringOrArray: string | string[]) {
    if(typeof stringOrArray == "string") {
        return stringOrArray.split("").reverse().join("");
    } else {
        return stringOrArray.slice().reverse();
    }
}

const hello = reverse("hello");
const helloArray = reverse(["h", "e", "l", "l", "o"]);

```

- 输出日期

```TypeScript

function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number);

function makeDate(timestampOrYear: number, month?: number, day?: number) {
    if(moth != null && day != null) {
        return new Date(timesOrYear, month - 1, day);
    } else {
        return new Date(timesOrYear);
    }
}

const day1 = makeDate(2021, 1, 1);
const day2 = makeDate(154685265);
//const day3 = makeDate(2021, 1);//编译器会报错

```

## 3 CallAignatures调用签名

- 定义类型的时候可以使用{}或者() => {}的形式

```TypeScript

//函数签名
// type Add = (a: number, b: number) => number;

type Add = {
    (a: number, b: number): number;
};

const add: Add = (a: number, b: number) => {
    return a + b;
}

//new 构造函数
type Point = {
    new (x: number, y: number) => {x: number; y: number;}
    new (x: number, y: number, z: number) => {x: number; y: number; z: number;}
}

const point = class {
    constructor(public x: number, public y: number, public z?: number) {}
}

```

## 4 IndexSignatures索引签名

- 当访问不存在的索引时编译器会返回undefined，如果把它赋值给一个常量后，调用索引的属性，编译器不会报错，但这个语法时错误的

```TypeScript

const obj = {
    hello: "world",
}

const ddd = obj["hello"]; //ddd的值为world

const nums = {
    234: "hhh",
}

console.log(nums[234]); //hhh

//索引签名
type Dictionary = {
    [key: string]: any;
};

type Person = {
    name: string;
    email: string;
};

type PersonDictionary = {
    [username: string]: Person;
};

const persons : PersonDictionary = {
    Hua: {
        name: "华",
        email: "Hua@163.com"
    },
    Elysia: {
        name: "爱莉希雅",
        email: "Elysia@163.com"
    },
};

const hua = persons["Hua"];
persons["Su"] = {
        name: "苏",
        email: "Su@163.com"
}

//删除索引
delete persons["Hua"];

const error = persons["error"];//undefined
error.name;//ts不会报错，要小心这个错误

```

## 5 read only 只读

- 纯函数(pure function)：给一个函数同样的参数，那么这个函数将永远返回同样的值
- 副作用与纯函数相反，指一个函数处理了与返回值无关的事情
- 对于输入参数一样，而输出结果不确定的情况就是副作用

```TypeScript

function reverseSorted(input: number[]): number[] {
    return input.sort().reverse();
}

const started = [1, 2, 3, 4];
const result = reverseSorted(started);

console.log(started);//4321
console.log(result);//4321
//出现这种情况的原因时函数直接将原数组修改了

//表示input只可以被读取不可以被改写
function reverseSorted2(input: readonly number[]): number[] {
    // return input.slice().sort().reverse();
    return [...input].sort().reverse();
}

const started2 = [1, 2, 3, 4];
const result2 = reverseSorted2(started2);

console.log(started2);//1234
console.log(result2);//4321

```

## 6 Double Assertion 双重断言

```TypeScript

type Point2D = {x: number; y: number;};
type Point3D = {x: number; y: number; z: number};
type Person = {name: string; email: number;};

let point2: Point2D = {x: 0, y: 1};
let point3: Point3D = {x: 0, y: 1, z: 5};
let person: Person = {name: "hhh", email: "mmm@163.com"};

point2 = point3;//不会报错
point3 = point2;//会报错
//可以通过断言将报错取消，欺骗编译器
point3 = point2 as Point3D;//使用断言有风险

person = point3;//会报错
person = point3 as Person;//还是报错
//使用双重断言
person = point3 as any as Person;//不会报错

```

## 7 const Assertion 常量断言

- 常量断言可以用于断言任何一个类型
- 它可以把对象中的任何原始类型的成员变量都转换为readonly只属性
- 数组这样复杂的数据类型，使用常量断言也可以完成只读类型的转化

```TypeScript

const king = 'elvis';

king = 'alex';//修改常量会报错

const alex = {
    name: "aaa",
    job: "jjj"
}

alex = {
   name: "aa2",
    job: "jj2" 
}//会报错

//因为const只修饰alex，没有修饰内部，想要内部不能被修改需要用readonly来修饰成员变量 或者使用常量断言
alex.name = "jack";//不会报错
alex.job = "teacher";//不会报错

const obj1 = {
    name: "aaa",
    job: "jjj"
} as const;//常量断言

obj1 = {
   name: "aa2",
    job: "jj2" 
}//会报错

obj1.name = "jack";//会报错
obj1.job = "teacher";//会报错

```

- JavaScript的字符串中本身就是immutable，不可修改

## 8 this

- this必须是第一位参数
- 当函数内部使用this关键字时，如果没在参数声明this的类型，很容易发生错误

```TypeScript

function double(this: {value: number}) {
    this.value = this.value * 2;
}

const vaild = {
    value: 10,
    double,
};
vaild.double();//this指向vaild
vaild.value;//20

const invaild = {
    valve: 10,
    double,
};
//会报错，如果double参数没有声明this: {value: number}则不会报错
invaild.double();

```

## 9 typeof 操作符

- 定义类型时可以用typeof操作符提取操作对象的类型

```TypeScript

const center = {
    x: 0,
    y: 0,
    z: 0
};

type Point = typeof center;
//等价于
// type Point = {
//     x: number;
//     y: number;
//     z: number;
// }

const unit: typeof center = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1
};

```

## 10 keyof操作符

- 使用keyof操作符可以将操作对象的key提取出来

```TypeScript

type Person = {
    name: string;
    age: number;
    location: string;
};

const hua: Person = {
    name: "hua",
    age: 16,
    location: "沧海市",
};

type PeronKey = keyof Person;

//使用泛型
function getValueByKey<Obj, Key extends keyof obj>(object: Obj, key: Key) {
    const value = obj[key];
    return value;
}

const age = getValueByKey(hua, "age");//age = 16

function setValueByKey<Obj, Key extends keyof obj>(obj: Obj, key: Key,value: Obj[Key]) {
    obj[key] = value;
}

```

## 11 lookup types类型查找

- 当数据结构很复杂时，要想声明复杂数据结构内部的小部分数据类型声明，可以使用索引来声明，即：复杂数据类型名[ "想要声明部分的索引" ]

## 12 Mapped Types类型映射

- 可以使用[ 映射名 in 需要映射的属性名(一般使用keyof来提取)]: 需要映射的属性类型结构(使用 需要映射的对象名[ 映射名 ]) 来映射类型

```TypeScript

type Point = {
    x: number;
    y: number;
    z: number;
}

//类型映射，需要在前面加上export否则会报错，因为在TypeScript内嵌了Readonly方法的实现可以直接使用Readonly<T>来声明只读类型
export type Readonly<T> = {
    readonly [key in keyof T]: T[key]
}

```

## 13 Mapped Modifier 映射修饰符

- 在映射里面可以添加?修饰符，让映射类型变成可选
- 也可以添加-修饰readonly或者?，让映射的类型不是只读或者可选属性，即使需要映射的类型中含有只读或者可选属性，它也会去掉只读或者可选属性
- 也可以添加+修饰readonly或者?，让映射的类型都变成只读属性或可选属性，与直接添加readonly或者?的效果一样

```TypeScript

type Mapped<T> = {
    readonly [P in keyof T] ? : T[P]
}

```
