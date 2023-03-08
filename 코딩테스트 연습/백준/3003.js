const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .split(' ')
  .map((x) => Number(x));

const arr = [1, 1, 2, 2, 2, 8];
let answer = [];
for (let i = 0; i < arr.length; i++) {
  answer.push(arr[i] - input[i]);
}

console.log(...answer);
