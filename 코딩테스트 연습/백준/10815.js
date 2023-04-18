const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

let [, arr1, , arr2] = input;

let arr11 = arr1
  .split(' ')
  .map((x) => +x)
  .sort((a, b) => a - b);
let arr22 = arr2.split(' ').map((x) => +x);
let answer = [];

arr22.forEach((x) => {
  let left = 0;
  let right = arr11.length - 1;
  let a = 0;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (x === arr11[mid]) {
      a = 1;
      break;
    } else if (x < arr11[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  answer.push(a);
});

console.log(answer.join(' '));
