const sumar = (n1, n2) => {
    operacionGlobal = 'sumar';
    return n1 + n2
    }
const restar = (n1, n2) => {
    operacionGlobal = 'restar';
    return n1 - n2
    }
const multiplicar = (n1, n2) => {
    operacionGlobal = 'multiplicar';
    return n1 * n2
    }
const dividir = (n1, n2) => {
    operacionGlobal = 'dividir' ;
    return n1 / n2
    }


const realizarOperacion = (n1, n2, callback) => {
    const resultado = callback(n1, n2)
    console.log(`Se van a ${operacionGlobal} los numero ${n1}, y ${n2}`);
    console.log(`El resultado es ${resultado}`);
}
realizarOperacion(3,5,sumar)
realizarOperacion(3,5,restar)
realizarOperacion(3,5,multiplicar)
realizarOperacion(3,5,dividir)