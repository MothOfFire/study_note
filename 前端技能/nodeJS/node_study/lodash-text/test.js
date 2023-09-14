const _ = require('lodash');

const array = [1, 2, 3];
const otherArray = _.concat(array, 4, 5);

console.log(otherArray);