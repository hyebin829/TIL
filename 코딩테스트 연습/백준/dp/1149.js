const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => x.split(" ").map((x) => +x));

let num = Number(input.shift());
let arr = Array.from(Array(num), () => Array(3).fill(0));

const getMin = (arr, num, j) => {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (i !== j) {
      min = Math.min(min, arr[i] + num);
    }
  }
  return min;
};

arr[0] = input[0];
for (let i = 1; i < num; i++) {
  for (let j = 0; j < 3; j++) {
    arr[i][j] = getMin(arr[i - 1], input[i][j], j);
  }
}

console.log(Math.min(...arr[arr.length - 1]));
