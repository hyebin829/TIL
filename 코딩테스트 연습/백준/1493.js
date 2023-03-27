const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let one = input.split('1').filter((x) => x !== '');
let zero = input.split('0').filter((x) => x !== '');

let min = Math.min(one.length, zero.length);
console.log(min);
