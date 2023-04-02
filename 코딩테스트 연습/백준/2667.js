const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

const num = Number(input.shift());
let arr = input.map((x) => x.split("").map((x) => +x));
console.log(arr);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let answer = [];
let cnt = 1;

function DFS(x, y) {
  arr[x][y] = 0;
  for (let k = 0; k < 4; k++) {
    let nx = x + dx[k];
    let ny = y + dy[k];
    if (nx >= 0 && ny >= 0 && nx < num && ny < num && arr[nx][ny] === 1) {
      cnt++;
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (arr[i][j] === 1) {
      DFS(i, j);
      answer.push(cnt);
      cnt = 1;
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
