function sum (a, b) {
    return a + b;
}

function test() {
    console.log('this is test function');
}

//导出sum
// module.exports = sum;
// 导出多个模块
module.exports = {
    sum,
    test
}