const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => Number(x));

input.pop();

let arr = [];

for (let i = 0; i < input.length; i++) {
  arr = [];
  for (let j = 1; j < input[i]; j++) {
    if (input[i] % j === 0) {
      arr.push(j);
    }
  }
  if (arr.reduce((acc, cur) => acc + cur) === input[i]) {
    console.log(`${input[i]} = ${arr.join(' + ')}`);
  } else {
    console.log(`${input[i]} is NOT perfect.`);
  }
}
