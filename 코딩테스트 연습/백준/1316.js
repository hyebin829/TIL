const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

input.shift();
let newarr = input.map((x) => x.split(''));

let arr = [];
let cnt = 0;

for (let i = 0; i < newarr.length; i++) {
  arr = [];
  let set = new Set(newarr[i]);
  while (newarr[i].length) {
    if (arr[arr.length - 1] !== newarr[i][0]) {
      arr.push(newarr[i].shift());
    } else {
      newarr[i].shift();
    }
  }
  if (set.size === arr.length) cnt++;
}
console.log(cnt);
