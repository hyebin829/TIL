const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => +x);

console.log(input);
const num = input.shift();
const arr = Array.from({ length: 101 }, () => 0);

arr[1] = 1;
arr[2] = 1;
arr[3] = 1;
arr[4] = 2;
arr[5] = 2;
arr[6] = 3;

for (let i = 7; i < arr.length; i++) {
  arr[i] = arr[i - 1] + arr[i - 5];
}

for (let i = 0; i < input.length; i++) {
  console.log(arr[input[i]]);
}
