const lodash = require('lodash');
const array = [1, 2, 4, 4, 6, 7, 1];
const arrayUnico = lodash.uniq(array);

console.log(array);
console.log(arrayUnico);