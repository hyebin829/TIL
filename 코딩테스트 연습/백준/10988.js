const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const arr = input.split('').reverse().join('');
input === arr ? console.log(1) : console.log(0);
