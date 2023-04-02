const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split("\r\n");

let [, arr] = [input.shift(), ...input];
let newArr = arr.split(" ").map((x) => +x);
console.log(newArr);

let num = 0;

for (let x of newArr) {
  if (x === num % 3) {
    num++;
  }
}

console.log(num);
