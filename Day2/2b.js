const fs = require('fs');
let sum = 0;

let input = fs.readFileSync('./input.txt', 'utf8');

let rows = input.split('\n').map(row => row.split('\t').map(number => parseInt(number)));

for (let i = 0; i < rows.length; i++){
    for (let j = 0; j < rows[i].length; j++){
        for (let k = 0; k < rows[i].length; k++) {
            if (rows[i][j] % rows[i][k] === 0 && j != k) {
                sum += rows[i][j] / rows[i][k];
            }
        }
    }
}

console.log(sum);