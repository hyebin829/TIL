const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => x.split(' ').map((x) => Number(x.split(' '))));

const num = input.shift();

const arr2 = Array.from(Array(100), () => Array(100).fill(0));

for (let i = 0; i < num; i++) {
  for (let j = input[i][0]; j < input[i][0] + 10; j++) {
    for (let k = input[i][1]; k < input[i][1] + 10; k++) {
      if (!arr2[j][k]) arr2[j][k]++;
    }
  }
}

let answer = 0;

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (arr2[i][j]) answer++;
  }
}

console.log(answer);
