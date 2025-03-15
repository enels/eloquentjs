// EXERCISES
function range(start, end) {
    "use strict";
    let result = [];

    for (let i = start; i <= end; i++)
        result.push(i);

    return result;
}


function sum(arr) {
    "use strict";
    let total = 0;

    for (let value of arr)
        total += value;

    return total;
}

function rangeWithStep(start, end, step=1) {

    let  result = [];

    for (let i = start; i <= end; i++) {
        result.push(i);
        // iterate through the steps to skip the next step numbers in the range start-end
        for (let j = 1; j < step; j++) {
            i++;
            j++;
        }
    }

    return result;
}