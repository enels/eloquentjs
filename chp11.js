"use strict";

function* powers(n) {
    for (let current = n; ; current *= n) {
        yield current;
    }
}

let n = 5;

// for (let power of powers(n)) {
//     if (power > 50) {
//         break;
//     }
//     console.log(power);
// }

let power = powers(n).next();
while (power < 500) {
    console.log(power);
    power = powers(n).next();
}

let start = Date.now();
setTimeout(() => {
console.log("Timeout ran at", Date.now() - start);
}, 2000);
while (Date.now() < start + 50) {}
console.log("Wasted time until", Date.now() - start);