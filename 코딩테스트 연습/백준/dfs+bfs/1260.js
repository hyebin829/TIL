const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let arr = input.map((x) => x.split(" "));
let start = arr.shift();
let graph = Array.from(Array(Number(start[0]) + 1), () => Array());

for (let [a, b] of arr) {
  graph[Number(a)].push(Number(b));
  graph[Number(b)].push(Number(a));
}
graph.map((x) => x.sort((a, b) => b - a));

function dfs(graph, startNode) {
  const visited = new Set();
  const stack = [startNode];
  let answer = [];

  while (stack.length !== 0) {
    const current = stack.pop();
    if (!visited.has(current)) {
      visited.add(current);
      answer.push(current);
      graph[current].forEach((x) => {
        if (!visited.has(x)) {
          stack.push(x);
        }
      });
    }
  }
  return answer;
}

function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];

  let answer = [];

  while (queue.length !== 0) {
    const current = queue.shift();
    if (!visited.has(current)) {
      visited.add(current);
      answer.push(current);
      graph[current].forEach((x) => {
        if (!visited.has(x)) {
          queue.push(x);
        }
      });
    }
  }
  return answer;
}

console.log(dfs(graph, Number(start[2])).join(" "));

graph.map((x) => x.sort((a, b) => a - b));

console.log(bfs(graph, Number(start[2])).join(" "));
