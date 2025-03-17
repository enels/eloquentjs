/*
 *
 * 
 * @class: Vec
 * @getter: length
 * @setter: length
 * 
 * 
*/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return `${this.x + vector.x}i + ${this.y + vector.y}j`;
    }

    minus(vector) {
        return `${this.x - vector.x}i + ${this.x - vector.y}j`;
    }

    get length() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

/*
 *
 *
 * @class Group
 * @constructor params null
 * 
 * 
 * */
class Group {

    constructor() {
        this.group = [];
    }

    /* add a value to the group(this.group) if it doesn't already exists */
    add(value) {
        let groupContainsValue = false;

        this.group.forEach((e) => {if (e == value) groupContainsValue = true});

        if (!groupContainsValue) {
            this.group.push(value);
        }
    }

    /* delete a member from the group array if value is a member */
    delete(value) {
        
        // get the index of the value in the group
        if (this.has(value))
            delete this.group[this.group.indexOf(value)];
    }

    /* check if the argument is a member of the group */
    has(value) {
        // get the index of the value in the group
        let index = this.group.indexOf(value);

        if (index >= 0) {
            return true;
        }

        return false;
    }

    /* creates a new Group from an Iterable object (array) */
    static from(iterObj) {
        // create new group
        const newGroup = new Group();

        // add values of iterObj to the new group
        iterObj.forEach((e) => {newGroup.add(e)});

        return newGroup;
    }
}

/* @testing */
