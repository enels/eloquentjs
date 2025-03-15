function beanCount(str) {
    "use strict";

    let bCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B")
            bCount++;
    }

    return bCount;
}