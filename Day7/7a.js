const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');

let parents = input.split('\n').map(line => line.substr(0, line.indexOf(' ')));

let children = input.split('\n');// map(line => line.substr(line.indexOf(' ')[1]));

for (let i = children.length - 1; i >= 0; i--) {
    console.log(children[i]);
    if (!children[i].includes(',')) {
        children.splice(i, 1);
    }
}

console.log(children);