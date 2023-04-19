const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let [num, arr] = input;
let newarr = arr.split(" ").map((x) => +x);

let set = new Set(newarr);

let answer = Array.from(set).sort((a, b) => a - b);
console.log(...answer);
