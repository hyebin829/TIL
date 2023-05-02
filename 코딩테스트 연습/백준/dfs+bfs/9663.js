const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim();

const num = Number(input);

let col = new Set();
let diag1 = new Set();
let diag2 = new Set();
let cnt = 0;

const nQueen = (col, row, diag1, diag2) => {
  if (row === num) {
    cnt++;
  } else {
    for (let i = 0; i < num; i++) {
      let d1 = row + i;
      let d2 = row - i;
      if (!diag1.has(d1) && !diag2.has(d2) && !col.has(i)) {
        diag1.add(d1);
        diag2.add(d2);
        col.add(i);
        nQueen(col, row + 1, diag1, diag2);
        diag1.delete(d1);
        diag2.delete(d2);
        col.delete(i);
      }
    }
  }
};

nQueen(col, 0, diag1, diag2);

console.log(cnt);
