
class Person {
    constructor(name = 'Anonymous', age = 0) {//name = Anonymous is default value 
        //when no name is present while creating a new instance of this class
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;//double flips to give correct true or false value!
    }
    getDescription() {
        let desc = super.getDescription();
        if(this.hasMajor) {
            desc+= ` Their major is ${this.major}.`;
        }
        return desc;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            return greeting+ ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}


const me = new Traveler('Shradha Katyal', 21, 'Delhi');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
