/* Se declara una clase Persona, la cual debe crearse con un nombre que indentifique la instancia.
Ademas, habra una variable estatica utilizable para todos.
Se comprobara la individualidad entre las dos instancias */

class Persona {
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    static specie = 'Humano';

    getFullName(){
        return `${this.name} ${this.lastName}`
    }

    getSpecies(){
        return `Aunque no lo creas soy una ${Persona.specie}`
    }
}
const person1 = new Persona('Pedro', 'Rodriguez', 30)
const person2 = new Persona('Luciana', 'Martinez', 35)

console.log(person1.getFullName());
console.log(person2.getFullName());
console.log(person2.getSpecies());