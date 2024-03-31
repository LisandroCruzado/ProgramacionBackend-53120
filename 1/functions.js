//Son bloques de instrucciones que van a trabajar sobre un scope interno, conocido como scope local
console.log('Functions');

function run(text/* <- Argumento*/) { //Retorna void
    console.log(text);
}

const test = (text) => {
    console.log('Hola Mundo');
}

function increment (n) {
    return n + 1;
}

const incrementArrrow = n => n + 1;

function add(n1, n2) {
    return n1 + n2;
}

const addArrow = (n1, n2) => n1 + n2;