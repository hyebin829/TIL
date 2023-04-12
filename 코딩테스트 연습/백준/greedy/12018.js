const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\r\n");

let arr = input.map((x) => x.split(" ").map((x) => +x));

let [num, myM] = arr.shift();
let answer = [];

for (let i = 0; i < arr.length; i += 2) {
  if (arr[i][0] < arr[i][1]) {
    answer.push(1);
  } else {
    let sortarr = arr[i + 1].sort((a, b) => b - a);
    if (sortarr[arr[i][1] - 1]) {
      answer.push(sortarr[arr[i][1] - 1]);
    } else {
      answer.push(sortarr[sortarr.length - 1]);
    }
  }
}

let sortanswer = answer.sort((a, b) => a - b);
let sum = 0;
let number = 0;

for (let i = 0; i < sortanswer.length; i++) {
  sum += sortanswer[i];
  if (sum <= myM) {
    number++;
  }
}
console.log(number);
