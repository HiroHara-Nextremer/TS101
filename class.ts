class Person {
    private name: string;
    private type: string;
    protected age: number = 27;

    constructor(public name: string, public username: string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('hiro', 'hiro');
console.log(person.name, person.username);
person.printAge();
person.setType('cool guy');

// inheritance 
class John extends Person { 
    constructor(username: string){
        super("MAx", username);
    } 
}
const max = ner John('John');
console.log(max);
