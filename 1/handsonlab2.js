/*
Creacion de una clase contador
Se creara una clase que permitira llevar cuentas individuales segun cada responsable
Definiir clase Contador
La clase se creara con un nombre, representando al responsable del contador
El contador debe incializarse en 0
Debe existir una variable estatica que funcione como contador global de todas las instancias de contador creadas
Definir el metodo getResponsable el cual debe devolver el responsable de dicho contador
Definir el metodo contar el cual debe incrementar, tanto su cuenta individual, como la cuenta global
Definir el metodo getCuentaIndividuall el cual debe devolver solo la cuenta individual del contador
Definir el metodo getCuentaGlobal, el cual debe devolver la variable estatica con el conteo global
Realizar prueba de individualidad entre las instancias
*/

class Contador {
    constructor(name){
        this.name = name;
        this.total = 0;
    }
    static totalGlobal = 0;

    getResponsable(){
        return this.name;
    }

    getIndividualCount(){
        return this.total
    }

    getGlobalCount(){
        return Contador.totalGlobal;
    }

    contar(){
        this.total += 1;
        Contador.totalGlobal += 1;
    }
}

let persona1 = new Contador('Joaco')
let persona2 = new Contador('Sasha')

persona1.contar()
persona1.contar()
persona1.contar()

persona2.contar()
persona2.contar()
persona2.contar()
persona2.contar()


console.log(persona1.getIndividualCount())
console.log(persona2.getIndividualCount())
console.log(Contador.totalGlobal)


console.log(`${persona1.getResponsable()}: ${persona1.getIndividualCount()}`);
console.log(`${persona2.getResponsable()}: ${persona2.getIndividualCount()}`);
console.log(`Cuenta Global: ${persona1.getGlobalCount()}`);