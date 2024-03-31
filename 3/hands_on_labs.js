function sumar(n1, n2) {
    return new Promise ((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("[SUMA] Operacion innecesaria")
        } else {
            resolve(n1 + n2)
        }
    })
}

function restar(n1, n2) {
    return new Promise ((resolve, reject) => {
        if (n1 === 0 || n2 === 0) {
            reject("[RESTA] Operacion invalida")
        } else if ( n1 - n2 < 0) {
            reject("[RESTA] La calculadora solo puede devolver valores positivos")
        } else  {
            resolve(n1 - n1 )
        }
    })
}

function multiplicar(n1, n2) {
    return new Promise ((resolve, reject) => {
        if (n1 < 0 || n2 < 0) {
            reject("[MULTIPLICACION] La calculadora solo puedo devolver valores positivos")
        } else {
            resolve(n1 * n2 )
        }
    })
}

function dividir(n1, n2) {
    return new Promise ((resolve, reject) => {
        if (n2 === 0) {
            reject("[DIVIDIR] No se puede devidir por 0")
        } else {
            resolve(n1 / n2 )
        }
    })
}


const asyncBlock = async (n1, n2) =>{
    try {
        const suma = await sumar(n1, n2)
        const resta = await restar(n1,n2)
        const multiplicacion = await multiplicar(n1,n2)
        const division = await dividir(n1,n2)
        console.log(`Se operan los numeros ${n1} y ${n2}\n`);
        console.log(`Suma : ${suma}\n Resta : ${resta}\n Multiplicacion: ${multiplicacion}\n Division : ${division}`);
    } catch(error) {
        console.error(error);
    }
}

asyncBlock(10,-2)