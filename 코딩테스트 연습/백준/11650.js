const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

input.shift();

let arr = input.map((x) => x.split(" ").map((x) => +x)).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
let answer = "";
arr.forEach((x) => {
  answer += `${x[0]} ${x[1]}\n`;
});

console.log(answer);
