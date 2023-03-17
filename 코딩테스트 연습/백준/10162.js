const fs = require('fs');
const input = fs.readFileSync('example.txt').toString();

let num = Number(input);
let arr = [300, 60, 10];
let answer = [];

for (let i of arr) {
  if (num <= 0) break;

  answer.push(parseInt(num / i));
  num %= i;
}

if (num === 0) {
  console.log(answer.join(' '));
} else {
  console.log(-1);
}
