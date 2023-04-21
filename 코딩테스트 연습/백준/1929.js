const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

let [start, end] = input;
let arr = Array.from({ length: end + 1 }).fill(true);

for (let i = 2; i <= Math.sqrt(end); i++) {
  if (arr[i]) {
    for (let j = i * i; j <= end; j += i) {
      arr[j] = false;
    }
  }
}

let answer = [];
arr[1] = false;

for (let i = start; i <= end; i++) {
  if (arr[i]) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));
