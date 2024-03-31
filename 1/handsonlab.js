/* Definieremos la fucnion mostrar 'mostrarLista', la cual recibira un arreglo con elementos como parametro.
Si la lista esta vacia, devolver un mensaje indicando 'Lista vacia'
Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso devolviendo la longitud
de la lista (Utilizar template strings)
Invocar la funcion con los casos de prueba */

function mostrarLista (arreglo) {
    if(arreglo.length > 0) {
        arreglo.forEach(element => {
            console.log(element);
        });
        console.log(`La lista ${arreglo.length} productos`);

    } else {
        console.log('Lista vacia');
        return
    }
}

let arreglo = ['pan', 'leche']


mostrarLista(arreglo)