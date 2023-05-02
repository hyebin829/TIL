const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => x.split(" ").map((x) => +x));

let num = Number(input.shift());
let arr = Array.from(Array(num), () => Array(num).fill(0));

arr[0][0] = input[0][0];
if (num > 1) {
  arr[1][0] = input[1][0] + input[0][0];
  arr[1][1] = input[1][1] + input[0][0];
}

for (let i = 2; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (j === i + 1) break;
    if (j === 0) {
      arr[i][j] = arr[i - 1][j] + input[i][j];
    } else if (i === j) {
      arr[i][j] = arr[i - 1][j - 1] + input[i][j];
    } else {
      arr[i][j] = Math.max(arr[i - 1][j - 1] + input[i][j], arr[i - 1][j] + input[i][j]);
    }
  }
}

console.log(Math.max(...arr[arr.length - 1]));
