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