const {reverse} = require("./reverse");
const {readFile, writeFile} = require("fs");

let argument = process.argv[2];

//console.log(reverse(argument));

readFile("file.txt", "utf8", (error, text) => {
    if (error) throw error;
    console.log(`The file contains: ${text}`);
});

// write to file
writeFile("newfile.txt", "Node was here", err => {
    if (err) console.log(`Failed to write file: ${err}`);
    else console.log("File written");

    // display contents of file
    readFile("newfile.txt", "utf8", (error, text) => {
        if (error) throw error;
        console.log(`Newly written file contains: ${text}`);
    });
});