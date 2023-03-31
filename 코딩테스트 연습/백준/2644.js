const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

const num = Number(input.shift());
const [start, end] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let newarr = input.map((x) => x.split(" ").map((x) => +x));

let arr = Array.from(Array(num + 1), () => Array());

for (let [a, b] of newarr) {
  arr[b].push(a);
  arr[a].push(b);
}

let count = 0;
let answer = 0;

function BFS(start, end) {
  let visited = new Set();
  let queue = [[start, count]];

  while (queue.length !== 0) {
    let cur = queue.shift();

    if (cur[0] === end) {
      answer = cur[1];
      break;
    }

    if (!visited.has(cur[0])) {
      visited.add(cur[0]);
      arr[cur[0]].forEach((x) => {
        if (!visited.has(x)) {
          queue.push([x, cur[1] + 1]);
        }
      });
    }
  }
}

BFS(start, end);

if (answer !== 0) {
  console.log(answer);
} else {
  console.log(-1);
}
