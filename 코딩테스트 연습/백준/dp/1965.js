const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let arr = input.map((x) => x.split(" ").map((x) => +x));

let [num, newarr] = arr;
let answer = 0;

let dy = Array.from({ length: num }, () => 0);
dy[0] = 1;

for (let i = 1; i < newarr.length; i++) {
  let max = 0;
  for (let j = i - 1; j >= 0; j--) {
    if (newarr[j] < newarr[i] && dy[j] > max) {
      max = dy[j];
    }
  }
  dy[i] = max + 1;
  answer = Math.max(answer, dy[i]);
}

console.log(answer);
