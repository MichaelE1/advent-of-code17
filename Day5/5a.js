const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');

let list = input.split('\n').map(number => parseInt(number));

let position = 0;
let temp;
let steps = 0;

while (position >= 0 && position < list.length) {   
    temp = list[position];
    list[position] += 1;
    position += temp;
    steps++;
}

console.log(steps);