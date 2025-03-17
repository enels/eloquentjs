function flatten(accumulator, currentValue) {
    newArr = arr.reduce((accumulator, currentValue) => [].concat(accumulator, currentValue));

    return newArr;
}
