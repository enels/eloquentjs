function noisy(f) {
    return (...args) => {
        console.log("calling with ", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

//noisy(Math.min)(3, 2, 1);

function combine (current, element) {
    return current + element;
}

function reduce (array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine (current, element);
    }

    return current;
}

console.log(reduce([2, 3, 5, 8, 9, 12, 1], combine, 0));