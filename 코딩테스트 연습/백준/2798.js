const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => x.split(' ').map((x) => +x));

const arr = input.shift();
const length = arr[0];
const goal = arr[1];
let max = 0;

const input2 = input[0];

function DFS(L, s, sum) {
  if (L === 3) {
    if (sum <= goal && sum >= max) {
      max = sum;
    }
  } else {
    for (let i = s; i < length; i++) {
      DFS(L + 1, i + 1, sum + input2[i]);
    }
  }
}

DFS(0, 0, 0);
console.log(max);
