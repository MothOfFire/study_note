const http = require('http');

// req-->request（请求） res --> response（响应）
const server = http.createServer((req, res) => {
    const url = req.url;
    const path = url.split('?')[0];
    res.end(path);
});

server.listen(3000);