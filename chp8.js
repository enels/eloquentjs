"use strict";

const accounts = {
    a: 100,
    b: 0,
    c: 20
};

/*
 *
 *
 * @param:
 * @return: {String} user account name
 * 
 * 
 */
function getAccount() {
    let accountName = prompt("Enter an account name: ");
    if (!accounts.hasOwnProperty(accountName)) {
        throw new Error(`No such account: ${accountName}`);
    }

    return accountName;
}


/*
 *
 * @param {string, Number} acount to debit, amount to debit
 * @return: null
 * 
 */
function transfer(from, amount) {
    if (accounts[from] < amount) return;

    let progress = 0;
    try {
        accounts[from] -= amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress++;
    }finally {
        if (progress == 1) {
            accounts[from] += amount;
        }
    }
}

console.log(transfer("z", 300));