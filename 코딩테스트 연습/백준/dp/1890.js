const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let arr = input.map((x) => x.split(" ").map((x) => +x));
let [num, ...newarr] = arr;

let dy = Array.from(Array(...num), () => Array(...num).fill(BigInt(0)));

dy[0][0] = BigInt(1);
for (let i = 0; i < newarr.length; i++) {
  for (let j = 0; j < newarr.length; j++) {
    if (newarr[i][j] === 0) continue;
    if (i + newarr[i][j] < num) {
      dy[i + newarr[i][j]][j] += dy[i][j];
    }
    if (j + newarr[i][j] < num) {
      dy[i][j + newarr[i][j]] += dy[i][j];
    }
  }
}

console.log(dy[num - 1][num - 1].toString());
