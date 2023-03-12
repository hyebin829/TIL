const fs = require('fs');
const input = fs
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\r\n')
  .map((x) => +x);

input.shift();

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let answer = [];

for (let i = 0; i < input.length; i++) {
  answer = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let j = 2; j < input[i]; j++) {
    if (isPrime(j) && isPrime(input[i] - j)) {
      if (Math.abs(j - (input[i] - j)) < min) {
        min = Math.abs(j - (input[i] - j));
        answer = [j, input[i] - j];
      }
    }
  }
  console.log(answer.join(' '));
}
