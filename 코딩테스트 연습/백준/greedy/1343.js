const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const a = new RegExp('XXXX', 'g');

const b = new RegExp('XX', 'g');

let str = input.replace(a, 'AAAA');
let str2 = str.replace(b, 'BB');

str2.includes('X') ? console.log(-1) : console.log(str2);
