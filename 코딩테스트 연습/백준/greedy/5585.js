const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

let arr = [500, 100, 50, 10, 5, 1];
let change = 1000 - Number(input);
let answer = 0;

for (let x of arr) {
  if (change === 0) break;
  answer += parseInt(change / x);
  change %= x;
}

console.log(answer);
