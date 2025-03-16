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

// reverse array
function reverseArray(arr) {

    "use strict";
    let newArr = [];

    for (let i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    return newArr;
}

// reverse array in-place
function reverseArrayInPlace(arr) {

    "use strict";
    let tmp, isEven;

    // check if the lenght is even
    if (arrLength % 2 == 0)
        isEven = true;

    // get the mid index
    let midIndex = arr.length / 2;

    // get last index
    let lastIndex = arrLength - 1;

    for (let i = 0; i <= midIndex; i++) {

        // if at the middle of the array
        if (isEven && i == midIndex)
            ;
        else { // perform swapping
            tmp = arr[i];
            arr[i] = arr[lastIndex - i];
            arr[lastIndex - i] = tmp;
        }
    }
}


// arrayToList problem
class ListNode {
    constructor(data) {
        this.value = data;
        this.rest = null;
    }
}

// function arrayToList
function arrayToList(arr) {
    "use strict";

    let list = new ListNode(arr[0]);
    let listHead = list;

    for (let i=1; i < arr.length; i++) {
        listHead.next = new ListNode(arr[i]);
        listHead = listHead.rest;
    }

    return list;
}

// function listToArray
function listToArray(list) {
    "use strict";

    // set the head of the list
    let listHead = list;

    // new array to store the list values
    let arr = new Array();

    while (listHead.rest != null) {
        arr.push(listHead.value);
        listHead = listHead.rest;
    }

    // pust the last value into array
    arr.push(listHead.value);

    return arr;
}

// helper functions
function prepend(element, list) {
    "use strict";

    // create the new list
    let newList = new ListNode(element);

    // add the new list to the front of the input list
    newList.rest = list;
    
    return newList;
}