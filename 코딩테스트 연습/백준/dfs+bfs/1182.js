const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let [num, arr] = input;
let arr1 = arr.split(" ").map((x) => +x);
let [num1, sum] = num.split(" ");

const ch = Array.from({ length: Number(num1) }, () => 0);
let cnt = 0;
let answer = [];

const dfs = (level) => {
  answer = [];
  if (level === Number(num1)) {
    let s = 0;
    for (let i = 0; i < Number(num1); i++) {
      if (ch[i] === 1) answer.push(arr1[i]);
    }
    if (answer.length > 0) {
      if (answer.reduce((acc, cur) => acc + cur) === Number(sum)) {
        cnt++;
      }
    }
  } else {
    ch[level] = 1;
    dfs(level + 1);
    ch[level] = 0;
    dfs(level + 1);
  }
};

dfs(0);

console.log(cnt);
