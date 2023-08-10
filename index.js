const lodash = require('lodash');
let { numeros } = require('./array');
let { letras } = require('./array');

numeros = lodash.uniq(numeros);
letras = lodash.uniq(letras);

console.log(numeros, letras);
