const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => x.split(' ').map((x) => +x));

let max = -1;
let arr = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      arr = [];
      arr.push(i + 1);
      arr.push(j + 1);
    }
  }
}
console.log(max + '\n' + arr[0] + ' ' + arr[1]);
