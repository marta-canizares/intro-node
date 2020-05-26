export default class SortedList {

    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.items.push(item);
        this.items.sort(function (a, b) { return a - b });
        this.length = this.items.length;
    }


    get(pos) {
        if (pos > this.items.length) {
            throw new Error('OutOfBounds');
        } else {
            return this.items[pos];
        }
    }

    max() {

        if (this.items.length === 0) {
            throw new Error('EmptySortedList');
        } else {
            return this.items[this.items.length - 1] // devuelve el valor de la ultima posicion del array
        }
    }

    min() {
        if (this.items.length === 0) {
            throw new Error('EmptySortedList');
        } else {
            return this.items[0]; // devuelve el valor de la primera posicion del array
        }

    }

    sum() {
        let pos = 0;

        if (this.items.length === 0) {
            return 0;
        } else {
            this.items.forEach(element => {
                return pos += element;
            });
            return pos;
        }

    }

    avg() {
        let pos = 0;

        if (this.items.length === 0) {
            throw new Error('EmptySortedList');
        } else {
            this.items.forEach(element => {
                return pos += element;
            });
            return pos / this.items.length;
        }
    }
}
