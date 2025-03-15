"use strict";

let journal = [
    {events: ["work", "touched tree", "pizza",
    "running", "television"],
    squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
    "lasagna", "touched tree", "brushed teeth"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts",
    "beer"],
    squirrel: true},
    /* and so on... */
];

function journalEvents(journal) {

    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event))
                events.push(event);
        }
    }

    return events;
}

//console.log(journalEvents(journal));

// using both concat and slice together to remove an array
function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

// REST PARAMETER
function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }

    return result;
}