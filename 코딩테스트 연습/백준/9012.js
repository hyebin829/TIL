const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

const num = input.shift();
let arr = input;

let stack = [];

for (let i = 0; i < num; i++) {
  stack = [];
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === '(') {
      stack.push('(');
    } else {
      if (stack.length !== 0 && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(')');
      }
    }
  }
  if (stack.length > 0) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
