const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let [str, word] = [input[0], input[1]];
console.log(str, word);
let cnt = 0;

while (str.indexOf(word) !== -1) {
  str = str.replace(word, "!");
  cnt++;
}

console.log(cnt);
