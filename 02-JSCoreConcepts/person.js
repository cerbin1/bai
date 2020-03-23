class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    displayFullName(){
        return `${this.name} ${this.surname.toUpperCase()}`;
    }

    displayInitials(){
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}`
    }
}

const first = new Person('Jan', 'Nowak');
const second = new Person('XXX', 'XXX');
console.log(first.displayFullName());
console.log(first.displayInitials());
console.log(second.displayFullName());
console.log(second.displayInitials());