"use strict";

function parseINI(string) {

    // start with an object to hold the top-level fields
    let result = {};
    let section = result;

    // split contents in string per line into an array
    // and work on each line
    string.split(/\r?\n/).forEach(line => {
        let match;

        // validate and check for value
        if (match = line.match(/^(\w+)=(.*)$/)) {
            section[match[1]] = match[2];
        }
        // match a new section
        else if (match = line.match(/^\[(.*)\]$/)) {
            section = result[match[1]] = {};
        }
        // match a comment line
        else if (!/^\s*(;.*)?$/.test(line)) {
            throw new Error(`Line '${line}' is not valid`);
        }
    });

    return result;
}

/* EXERCISES */
let s = "proportion";
//console.log(/ca(r|t)/.test(s));
console.log(/p(o|r)op/.test(s));

