const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let [num1, a, num2, b] = input;

let arr = a.split(" ").map((x) => +x);
let arr2 = b.split(" ").map((x) => +x);

let map = new Map();
for (let x of arr2) {
  map.set(x, 0);
}

for (let x of arr) {
  if (map.has(x)) {
    map.set(x, map.get(x) + 1);
  }
}

let answer = [];

arr2.forEach((x) => {
  if (map.has(x)) {
    answer.push(map.get(x));
  } else {
    answer.push(0);
  }
});

console.log(answer.join(" "));
