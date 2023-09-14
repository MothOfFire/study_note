# nodeJS处理HTTP

[返回](../nodeJS.md)

## 1 req 和 res

- req：request即请求
- res：response即响应
- 是 http 请求的关键

### 1.1 监听 http 请求

- 使用 http 模块，启动服务
- 本机的 IP 127.0.0.1
- 本机的域名 localhost

```javascript

const http = require('http');

const server = http.createServer(() => {
    console.log('已经收到 http 请求');
    //还没有返回任何东西
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```

### 1.2 req 和 res 的获取与使用

```javascript

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    console.log('url is:', url);
    //res 返回消息给前端 ==>格式是json
    res.end('hello world');
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```

## 2 路由

- 路由 router

  - 定义 method，如 GET/POST 等
  - 定义 url 规则，如 /api/list 和 /api/create
  - 定义输入（Request body）和输出（Response body）格式
- 路由是规则，url是具体形式

### 2.1 nodeJS 定义路由

- 从 req 中获取 url 和 method
- 判断 method 是否符合
- 看 url 是否符合规则

```javascript

const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    const method = req.method;
    console.log('url is:', url); //忽略/facicon.ico
    console.log('method is:', method);
    //定义GET路由
    if(path === 'api/list' && method === 'GET') {
        res.end('this is list router');
    }
    //POST
    if(path === 'api/create' && method === 'POST') {
        res.end('this is create router');
    }
    res.end('404');
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```

## 3 querystring

- 它是动态网页的基石
- url 中问号？后面的内容都是querystring（也叫url参数）
- 它是以 key = value 使用 & 进行分隔的形式，可以继续扩展
- 如何利用它实现动态网页
  
  - 服务端拿到 querystring
  - 根据不同的 querystring 返回不同的内容
  - 即变化 querystring 就是变化网页的内容，只要服务端支持
- hash 不能传到服务端
- 结构化与非结构化

  - 结构化数据易于通过程序访问和解析，如对象和数组
  - 非结构化的数据不易通过程序分析，如字符串
  - 编程中的数据都尽量使用结构化的数据

```javascript

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    //获取 querystring
    const queryStr = url.split('?')[1];
    const method = req.method;
    console.log('url is:', url); //忽略/facicon.ico
    console.log('method is:', method);
    //解析 querystring
    // const query = {};
    // //相当于判断语句， queryStr不为undefined，即有值时才执行 && 后面的语句
    // queryStr && queryStr.split('&').forEach(item => {
    //     const key = item.split('=')[0];
    //     const value = item.split('='[1]);
    //     query[key] = value;
    // })
    const query = querystring.parse(queryStr);
    console.log('query is:', query);
    //定义GET路由
    if(path === 'api/list' && method === 'GET') {
        res.end('this is list router');
    }
    //POST
    if(path === 'api/create' && method === 'POST') {
        res.end('this is create router');
    }
    res.end('404');
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```

## 4 res 返回数据

- 使用 res 设置返回的状态码，Content-type，Body
- 如何返回 JSON 数据

  - Content-type:application/json
  - res.end() 的参数只能是字符串，使用 JSON.stringify 将 JSON 数据转换为字符串
- 如何返回 html 数据

  - Content-type:text/html
  - res.end(...)，使用模板字符串的形式
  - 浏览器会根据 Content-type 识别出 html 格式

```javascript

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    const queryStr = url.split('?')[1];
    const method = req.method;
    const query = querystring.parse(queryStr);
    //定义GET路由
    if(path === 'api/list' && method === 'GET') {
        //返回 JSON 格式的数据
        const result = {
                errno: 0,
                data: [
                    {user: '张三', content: '留言1'},
                    {user: '李四', content: '留言2'}
                ]
            };
        res.writeHead(200, { 'Content-type': 'application/json' });
        //end 的参数只能是字符串，使用 JSON.stringify 将 JSON 数据转换为字符串
        res.end(JSON.stringify(result));
    }
    //POST
    if(path === 'api/create' && method === 'POST') {
        res.end('this is create router');
    }
    //没有路由 默认 404
    // res.writeHead(404, { 'Content-type': 'text/plain' });
    // res.end('404 Not Found');
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
                <body>
                    <h1>404 Not Found</h1>
                </body>
            </head>
        </html>
    `);
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```

## 5 接收 requestbody

- 流（stream）

  - 下载

    - source 即服务端，dest 即客户端（前端）
    - 水即下载的数据。水管即网络（带宽不确定）
    - 下载不仅指大文件，泛指所有的 Response Body
  - 上传

    - source 即客户端（前端），dest 即服务端
    - 水即上传的数据。水管即网络（带宽不确定）
    - 上传不仅指大文件，泛指所有的 Response Body
  - 浏览器能接收流数据

    - 服务端 res.end(...)，会自动以流的形式返回
    - 浏览器会识别到流，并持续接收消息（会有进度条）
    - 待全部接收完再做显示处理（例如视频是一段一段的播放）
  - 浏览器如何接收流数据

    - 前端使用 Ajax 提交数据 Request Body
    - 服务端需要识别流，并接收数据
    - 还要知道何时才能接收完成

```javascript

const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    const queryStr = url.split('?')[1];
    const method = req.method;
    const query = querystring.parse(queryStr);
    //定义GET路由
    if(path === 'api/list' && method === 'GET') {
        //返回 JSON 格式的数据
        const result = {
                errno: 0,
                data: [
                    {user: '张三', content: '留言1'},
                    {user: '李四', content: '留言2'}
                ]
            };
        res.writeHead(200, { 'Content-type': 'application/json' });
        //end 的参数只能是字符串，使用 JSON.stringify 将 JSON 数据转换为字符串
        res.end(JSON.stringify(result));
        return ;
    }
    //POST
    if(path === 'api/create' && method === 'POST') {
        const reqType = req.headers['content-type'];
        let bodyStr = '';
        req.on('data', chunk => {//服务端怎么去识别流，并接受数据
            //chunk 是流的每一段数据
            bodyStr = bodyStr + chunk.toString();
        });
        req.on('end', () => {//服务端怎么知道流完了
            if(reqType === 'application/json') {//json 格式
                const body = JSON.parse(bodyStr);
                console.log('body is:', body);
            }
            res.end('接收完成');//异步
        });
        return ;
    }
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>404</title>
                <body>
                    <h1>404 Not Found</h1>
                </body>
            </head>
        </html>
    `);
});
server.listen(3000); //监听 http 请求
console.log('http 请求已经被监听， 端口号：3000');

```
