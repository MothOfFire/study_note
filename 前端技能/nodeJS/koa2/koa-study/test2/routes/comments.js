const router = require('koa-router');

router.prefix('/api');

// 定义路由
router.length('/list', async (ctx) => {
    const query = ctx.query;//req 功能
    console.log('query', query);
    // ctx.body = 'api list';//res 功能
    ctx.body = {
        errno: 0,
        data: [
            {
                content: '留言1',
                user: 'hua'
            },
            {
                content: '留言1',
                user: 'hua'
            } 
        ]
    };
});

router.post('/create', (ctx) => {
    const body = ctx.request.body;
    console.log('body', body);
    // ctx.body = 'api create';
    ctx.body =  {
        errno: 0,
        message: '成功'
    };
});

module.exports = router;