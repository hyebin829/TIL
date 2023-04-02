const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().split('\r\n');

let [a, b] = input;

let arr = Array.from({ length: 16 }, () => 0);

for (let i = 0; i < a.length; i++) {
  arr[i * 2] = a[i];
}

for (let i = 0; i < b.length; i++) {
  arr[i * 2 + 1] = b[i];
}

while (arr.length !== 2) {
  let tmp = [];
  for (let i = 0; i < arr.length; i++) {
    let num = (Number(arr[i]) + Number(arr[i + 1])) % 10;
    if (!isNaN(num)) {
      tmp.push(num);
    }
  }
  arr = tmp;
}

console.log(arr.join(''));
