const fs = require('fs');
let checksum = 0;

let input = fs.readFileSync('./input.txt', 'utf8');

let rows = input.split('\n').map(row => row.split('\t').map(number => parseInt(number)));

for (let i = 0; i < rows.length; i++) {
    checksum += (Math.max(...rows[i]) - Math.min(...rows[i]));
} 

console.log(checksum);