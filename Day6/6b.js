let banks = [14, 0, 15, 12, 11, 11, 3, 5, 1, 6, 8, 4, 9, 1, 8, 4];
let patterns = [];
let duplicate = false;
let seenArray = [];
let seen = false;
let count = 0;

function duplicateCheck(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false; 
    }
    return true;
}

while (!duplicate) {
    patterns.push(banks.slice());
    
    let maxIndex = banks.indexOf(Math.max.apply(null, banks));
    
    let distribute = Math.floor(Math.max.apply(null, banks) / (banks.length - 1));
    
    if (distribute === 0) {
        // distribute in accordance with circular array
        for (let i = 0; i < banks.length; i++) {
            if (banks[maxIndex] != 0) {
                banks[(i + maxIndex) % banks.length]++;
                banks[maxIndex]--;
            } else {
                break;
            }
        }
    } else {
        // distribute evenly
        for (let i = 0; i < banks.length; i++) {
            if (i != maxIndex) {
                banks[i] += distribute;
            }
        }
        banks[maxIndex] -= distribute * (banks.length - 1);     
    }
    
    // check for duplicate pattern
    if (!seen) {
        for (let i = 0; i < patterns.length; i++) {
            if (duplicateCheck(banks, patterns[i])) {
                seenArray = banks.slice();
                seen = true;
            }
        }
    } else {
        count++;
        if (duplicateCheck(banks, seenArray)) {
            duplicate = true;
        }
    }
}

console.log(count);