class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    displayFullName(){
        return `${this.name} ${this.surname.toUpperCase()}`;
    }

    displayI(){
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}`
    }
}

const nowak = new Person('Jan', 'Nowak');
const me = new Person('Sebastian', 'Rajca');
console.log(me.displayFullName());
console.log(me.displayI());