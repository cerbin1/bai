names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(character) {
        return new Students(this.names.filter(name => name.charAt(0) == character))
    }

    sort() {
        this.names.sort()
        return this
    }

    get() {
        return this.names
    }

    getFirst(count) {
        return this.names.slice(0, count)
    }
}

students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());