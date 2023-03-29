const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let arr = input.map((x) => x.split(" "));
let num = Number(arr.shift());
arr.shift();

let graph = Array.from(Array(num + 1), () => Array());

for (let [a, b] of arr) {
  graph[Number(a)].push(Number(b));
  graph[Number(b)].push(Number(a));
}

function DFS(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];
  const path = [];

  while (stack.length !== 0) {
    let current = stack.pop();
    if (!visited.has(current)) {
      visited.add(current);
      path.push(current);
      graph[current].forEach((x) => {
        if (!visited.has(x)) {
          stack.push(x);
        }
      });
    }
  }
  return path;
}

console.log(DFS(graph, 1).length - 1);
