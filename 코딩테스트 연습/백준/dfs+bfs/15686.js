const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => x.split(" ").map((x) => +x));

let [num, c] = input.shift();
let min = Number.MAX_SAFE_INTEGER;

let charr = [];
let homearr = [];
let ch = Array.from({ length: 50 }).fill(0);

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (input[i][j] === 1) {
      homearr.push([i + 1, j + 1]);
    } else if (input[i][j] === 2) {
      charr.push([i + 1, j + 1]);
    }
  }
}

const dfs = (l, s) => {
  if (l === c) {
    let arr = [];
    let sum = 0;
    for (let i = 0; i < ch.length; i++) {
      if (ch[i]) {
        arr.push(charr[i]);
      }
    }

    for (let i = 0; i < homearr.length; i++) {
      sum += chickenDis(homearr[i], arr);
    }

    min = Math.min(min, sum);
  } else {
    for (let i = s; i < charr.length; i++) {
      ch[i] = 1;
      dfs(l + 1, i + 1);
      ch[i] = 0;
    }
  }
};

const chickenDis = (home, arr) => {
  let minDis = Number.MAX_SAFE_INTEGER;
  let [a, b] = home;
  for (let i = 0; i < arr.length; i++) {
    minDis = Math.min(minDis, Math.abs(a - arr[i][0]) + Math.abs(b - arr[i][1]));
  }
  return minDis;
};

dfs(0, 0);

console.log(min);
