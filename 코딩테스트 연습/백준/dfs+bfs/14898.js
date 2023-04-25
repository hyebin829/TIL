const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => x.split(" ").map((x) => +x));

let num = input.shift()[0];
let ch = Array.from({ length: num });
let min = Number.MAX_SAFE_INTEGER;

const dfs = (l, s) => {
  if (l === num / 2) {
    let start = [];
    let link = [];
    let sSum = (lSum = 0);
    for (let i = 0; i < num; i++) {
      if (ch[i]) {
        start.push(i);
      } else {
        link.push(i);
      }
    }
    for (let i = 0; i < num / 2; i++) {
      for (let j = i + 1; j < num / 2; j++) {
        sSum = sSum + input[start[i]][start[j]] + input[start[j]][start[i]];
        lSum = lSum + input[link[i]][link[j]] + input[link[j]][link[i]];
      }
    }
    min = Math.min(min, Math.abs(sSum - lSum));
  } else {
    for (let i = s; i < num; i++) {
      ch[i] = 1;
      dfs(l + 1, i + 1);
      ch[i] = 0;
    }
  }
};

dfs(0, 0);

console.log(min);
