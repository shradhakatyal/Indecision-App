//arguments object is no longer bound with arrow functions (cannot use args)

const add = function(a, b) {
    return a+b;
}

// this keyword - no longer bound with arrow functions

const multiplier = {
    number: [1, 2, 3, 4, 5],
    multiplyBy: 4,
    multiply() {
        return this.number.map((num) => num*this.multiplyBy);
    }
}

console.log(multiplier.multiply());