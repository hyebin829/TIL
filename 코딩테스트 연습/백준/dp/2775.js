const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => +x);

let num = input.shift();
let dp = Array.from(Array(15), () => Array(15).fill(0));

for (let i = 1; i <= 14; i++) {
  dp[0][i] = i;
}

for (let i = 1; i <= 14; i++) {
  for (let j = 1; j <= 14; j++) {
    dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
  }
}

for (let i = 0; i < input.length; i += 2) {
  console.log(dp[input[i]][input[i + 1]]);
}
