const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split('\r\n');

input.shift();

let arr = input
  .join(' ')
  .split(' ')
  .map((x) => +x);

let answer = 0;

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) continue;
  if (isPrime(arr[i])) answer++;
}

console.log(answer);
