const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

const num = input.shift();
let arr = input.map((x) => x.split(' '));

for (let i = 0; i < num; i++) {
  console.log(arr[i].map((x) => x.split('').reverse().join('')).join(' '));
}
