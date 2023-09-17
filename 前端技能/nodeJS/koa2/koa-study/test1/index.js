const Koa = require('koa');
const app = new Koa();

//ctx => context上下文
app.use(async (ctx) =>{
    ctx.body = 'Hello World';
});

app.listen(3000);