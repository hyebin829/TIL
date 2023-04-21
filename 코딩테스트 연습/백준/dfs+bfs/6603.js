const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

input.pop();
let arr = input.map((x) => x.split(" ").map((x) => +x));

let answer = "";
let num;
let newarr;

const lotto = (l, current) => {
  if (current.length === 6) {
    answer += `${current.join(" ")}\n`;
    return;
  } else {
    for (let i = l; i < num; i++) {
      lotto(i + 1, [...current, newarr[i]]);
    }
  }
};

arr.forEach((x) => {
  [num, newarr] = [x.shift(), x];
  lotto(0, []);
  answer += "\n";
});

console.log(answer);
