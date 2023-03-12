const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => +x);

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let answer = [];

for (let i = input[0]; i <= input[1]; i++) {
  if (i === 1) {
  } else if (isPrime(i)) {
    answer.push(i);
  }
}

if (answer.length === 0) {
  console.log(-1);
} else {
  console.log(answer.reduce((acc, cur) => acc + cur));
  console.log(answer[0]);
}
