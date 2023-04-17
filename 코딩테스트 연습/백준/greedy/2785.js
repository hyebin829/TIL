const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let [num, a] = input;
let arr = a
  .split(" ")
  .map((x) => +x)
  .sort((a, b) => a - b);

let cnt = 0;
let chain = arr[0];

while (arr.length !== 1) {
  if (chain === 0) {
    arr.shift();
    chain = arr[0];
  }

  if (arr.length > 1) {
    arr[arr.length - 2] += arr[arr.length - 1];
    arr.pop();
    chain--;
    cnt++;
  }
}

console.log(cnt);
