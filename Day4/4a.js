const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');

let rows = input.split('\n');

let duplicates = 0;

for (let i = 0; i < rows.length; i++) {
    let row = rows[i].split(' ');
    let sortedRow = row.slice().sort();
    let check = false;
    for (let j = 0; j < sortedRow.length - 1; j++) {
        if (sortedRow[j + 1] === sortedRow[j] && !check) {
            duplicates++;
            check = true;
        }
    }
}

// calculate valid rows
let validRows = rows.length - duplicates;
console.log(validRows);