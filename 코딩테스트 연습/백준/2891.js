const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

let newinput = input.map((x) => x.split(' '));

let num = Number(newinput[0][0]);
let arr = Array.from({ length: num }, () => 1);
let x = newinput[1].map((x) => Number(x));
let o = newinput[2].map((x) => Number(x));

for (let i = 0; i < x.length; i++) {
  arr[x[i] - 1]--;
}

for (let i = 0; i < o.length; i++) {
  arr[o[i] - 1]++;
}

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === 2) {
    if (!arr[i - 1]) {
      arr[i] = arr[i - 1] = 1;
      continue;
    }
  }
  if (arr[i] === 2) {
    if (!arr[i + 1]) {
      arr[i] = arr[i + 1] = 1;
      continue;
    }
  }
}
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) answer++;
}

console.log(answer);
