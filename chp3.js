function countB(str) {
    "use strict";
    return countChar(str, "B");
}

function countChar(str, ch) {
    "use strict";

    let charCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === ch)
            charCount++;
    }

    return charCount;
}