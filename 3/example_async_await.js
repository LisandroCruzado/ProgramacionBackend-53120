function dividir(diviendo, divisor) {
    return new Promise ((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(diviendo / divisor )
        }
    })
}

const AsyncFunction = async (n1, n2) => {
    try {
        console.log("Empieza la ejecucion");
        const resultado = await dividir(n1,n2)

        console.log(resultado);
        console.log('Termina la ejecucion');
    } catch(error) {
        console.log(error);
    } finally { //Este bloque siempre se ejecuta indistitantemente si se genera un error o no.
        console.log('Termina la ejecucion');
    }
}

AsyncFunction(10,2)