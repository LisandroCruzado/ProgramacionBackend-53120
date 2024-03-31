//Scopes

let i = 1;

function test(){
    if (true) {
        let j = 2;
        console.log(i);
        console.log(j);
    }
    console.log(i);
    //console.log(j);  //Genera un error Reference error
}

test();

// Const

const a = 1;
//a = 0; //Genera un error Type Error

/*Mientras que con let una variable puede ser reasignada, con const no es posible,
Si se intenta reasignar una conostante se obtendra un Type Error
Pero que no se puedan reasignar no quiere decir que sean INMUTABLES
Si el valor de una constante es algo 'mutable' como un array o un objeto, se pueden cambiar
los valores internos de sus elementos, algo NO REASIGNABLE NO ES LO MISMO QUE ALGO INMUTABLE */

const text = "Hola";
//text += " Mundo";
console.log(text); //Genera Type Error


const number = 1;
//number += 2;
console.log(number); //Genera Type Error

const array = [1,2,3,4];
console.log(array);

//Modificar algun elemento
array[0] = 10;
array[3] = 'Hola Mundo'

//Agrego un elemento mas
array.push(25)

console.log(array);
console.log(array[array.length - 1]); //Toma el ultimo elemento de cualquier array

console.log("Finalizacion dele codigo");


