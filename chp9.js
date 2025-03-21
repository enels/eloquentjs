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
let s = "He said, 'this isn't it at all'";

let w = "https://google.com";

// console.log(/ca(r|t)/.test(s));
// console.log(/p(o|r)op/.test(s));
// console.log(/ferr((et)|y|(ari))/.test(s));
// console.log(/.+(ious)$/.test(s));
// console.log(/\s[\.,:;]/.test(s));
// console.log(/\w{7}/.test(s));
// console.log(/\b[a-df-zA-DF-Z]+\b/.test(s));



// Some extra
// email validation
//console.log(/^[0-9a-z]+@\w+\.\w{2,3}$/.test(s));

// website validation
//console.log(/^(https:\/\/)(www.)?\w+\.\w{2,3}$/.test(w));

console.log(s.replace(/\'/g, ""));