const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

const [n, m] = input
  .shift()
  .split(" ")
  .map((x) => +x);

let newarr = input.map((x) => x.split("")).map((x) => x.map((x) => +x));

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

function BFS(x, y) {
  let queue = [[x, y, 1]];

  while (queue.length !== 0) {
    let [curx, cury, cnt] = queue.shift();

    if (curx === n - 1 && cury === m - 1) {
      return cnt;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = curx + dx[i];
        let ny = cury + dy[i];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && newarr[nx][ny] === 1) {
          newarr[nx][ny] = 0;
          queue.push([nx, ny, cnt + 1]);
        }
      }
    }
  }
}
newarr[0][0] = 0;
console.log(BFS(0, 0));
