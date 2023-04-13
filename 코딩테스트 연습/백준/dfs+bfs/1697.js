const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split(" ");

let arr = input.map((x) => Number(x));
let [start, end] = arr;

let ch = Array.from({ length: 100001 }, () => 0);
let dis = Array.from({ length: 100001 }, () => 0);
let answer = 0;

let queue = [];
ch[start] = 1;
queue.push(start);
dis[start] = 0;

if (start === end) {
  console.log(0);
  return;
}

while (queue.length) {
  let x = queue.shift();
  if (x === end) {
    answer = dis[x];
    break;
  }
  for (let nx of [x - 1, x + 1, x * 2]) {
    if (nx >= 0 && nx <= 100000 && ch[nx] === 0) {
      ch[nx] = 1;
      queue.push(nx);
      dis[nx] = dis[x] + 1;
    }
  }
}

console.log(answer);
