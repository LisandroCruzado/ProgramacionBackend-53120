console.log('Este es el ejemplo para ES9');
//Operador spread y operador rest

function add(...numbers){
    let add = 6;

    for (let n of numbers){
        add += n;
    }
    return add
}
const result = add(5,6,7);

console.log(`El resultado es : ${result}`);

//Operator Rest

let obj = {
    name: 'Joaquin',
    lastName: 'Cejas',
    age: 29
}

const {lastName, ...rest} = obj
console.log(rest);

//Operador spread (copia profunda de objetos)

const coders = {
    ivan: 'estudiante 1',
    jose:'estudiante2',
    jean: 'estudiante 3',
    profes: {
        joaco: 'profe',
        lucia: 'tutora adjunta'
    }
}

const coders_2 = coders;

coders_2.ivan = 'Otra cosa'
console.log('coders: ', coders);
console.log('coders 2: ', coders_2);

const coders_3 = {...coders};
coders_3.jean = 'Otra cosa'

console.log('coders: ', coders);
console.log('coders 3: ', coders_3);

coders_3.profes.joaco = 'Modificacion profunda' // No hace copias profundas (solo copia el primer nivel de atributos)

console.log('coders: ', coders);
console.log('coders 3: ', coders_3);

//Copias profundas

const coder_copia_profunda = JSON.parse(JSON.stringify(coders))
coder_copia_profunda.profes.lucia = 'Nerea'
console.log('coders: ', coders);
console.log('coders copia profunda ', coder_copia_profunda);