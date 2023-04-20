const fs = require("fs");
const input = fs
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((x) => +x);

let cnt = 0;
const dfs = (sum, target) => {
  if (sum >= target) {
    if (target === sum) {
      cnt++;
    }
    return cnt;
  } else {
    for (let i = 1; i <= 3; i++) {
      dfs(sum + i, target);
    }
  }
};

for (let i = 1; i < input.length; i++) {
  cnt = 0;
  dfs(0, input[i]);
  console.log(cnt);
}
