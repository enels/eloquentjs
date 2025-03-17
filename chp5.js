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

function every_v2(predicate, arr) {

    let res=[];

    arr.forEach(e => {res.push([e].some(predicate))});

    for (e of res)
        if (!e)
            return false;

    // if (arr.some(predicate) == false)
    //     return false;

    return true;
}