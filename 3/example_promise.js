function dividir(diviendo, divisor) {
    return new Promise ((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(diviendo / divisor )
        }
    })
}

//La promesa es como una pila de libros el ultimo que se apila es el primero en tomarse
//Se ejecuta 2da
dividir(10,0).then(resultado =>{
    console.log(`El resultado es ${resultado}`);
}).catch(error => {
    console.error(`Error: ${error}`);
})

//Se ejecuta 1ra
dividir(10,2).then(resultado =>{
    console.log(`El resultado es ${resultado}`);
}).catch(error => {
    console.error(`Error: ${error}`);
})