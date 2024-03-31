const fs = require('fs')
const filePath = './date_and_hours.txt'

//Agregandole 0 a los digitos
function agregarCero(numero) {
    if (numero < 10) {
        return 0 + numero
    } else {
        return numero.toString()
    }
}

// Crear un nuevo objeto Date
let fechaActual = new Date();

// Obtener el año, el mes y el día
let año = fechaActual.getFullYear();
let mes = agregarCero(fechaActual.getMonth() + 1); // Se agrega 1 porque los meses van de 0 a 11
let día = agregarCero(fechaActual.getDate());

// Obtener la hora, los minutos y los segundos
let horas = agregarCero(fechaActual.getHours());
let minutos = agregarCero(fechaActual.getMinutes());
let segundos = agregarCero(fechaActual.getSeconds());

// Formatear la fecha y la hora como una cadena
let fechaYHora = día + '-' + mes + '-' + año + ' ' + horas + ':' + minutos + ':' + segundos;

fs.writeFile(filePath,
    `La fecha y hora actual es: ${fechaYHora}`, (error) => {
    if (error) return console.error('Error al escribir el archivo');

    fs.readFile(filePath,'utf8',(error, result) => {
        if (error) return console.error('Error al leer el archivo');
        console.log(result)
        })
    })