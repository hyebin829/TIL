const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

input.shift();

let [a, b] = input.map((x) => x.split(" ").map((x) => +x));

let arr = a.sort((a, b) => a - b);
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  let idx = b.findIndex((x) => x === Math.max(...b));
  sum += arr[i] * b.splice(idx, 1);
}

console.log(sum);
