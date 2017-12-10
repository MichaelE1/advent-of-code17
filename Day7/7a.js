const fs = require('fs');

let input = fs.readFileSync('./input.txt', 'utf8');

let parents = input.split('\n').map(line => line.substr(0, line.indexOf(' ')));

let children = input.split('\n');

// Get only the children nodes
for (let i = children.length - 1; i >= 0; i--) {
    if (!children[i].includes(',')) {
        children.splice(i, 1);
    } else {
        let pattern = /[a-z]+\s\([0-9]+\)\s->\s/;
        children[i] = children[i].replace(pattern,"").replace(/\s/g, "").split(',');
    }
}

// Turn 2D child array into 1D
children = [].concat(...children);

// Find root by calculating the set difference
let root = parents.filter(x => children.indexOf(x) < 0);

console.log(root);