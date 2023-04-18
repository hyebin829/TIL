const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

console.log(input);
let [num1, arr1, num2, arr2] = input;

let arr11 = arr1
  .split(' ')
  .map((x) => +x)
  .sort((a, b) => a - b);
let arr22 = arr2.split(' ').map((x) => +x);
let a = [];

arr22.forEach((x) => {
  let lt = 0;
  let rt = arr11.length - 1;
  let answer = 0;
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (x === arr11[mid]) {
      answer = 1;
      break;
    } else if (x < arr11[mid]) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  a.push(answer);
});

console.log(a.join('\n'));
