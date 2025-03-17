function flatten(accumulator, currentValue) {
    newArr = arr.reduce((accumulator, currentValue) => [].concat(accumulator, currentValue));

    return newArr;
}

function predicate(element) {
    return element > 5;
}

function every(predicate, arr) {
    for (element of arr) {
        if (!predicate(element))
            return false;
    }

    return true;
}