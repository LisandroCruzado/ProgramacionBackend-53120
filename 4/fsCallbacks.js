const fs = require('fs')

const filePath = './example.txt'

fs.writeFile(filePath, 'Hola coders desde el Fs callback', (error) => {
    if (error) return console.error('Error al escribir el archivo');

    fs.readFile(filePath,'utf8',(error, result) => {
        if (error) return console.error('Error al leer el archivo');
        console.log(result);

        fs.appendFile(filePath, 'Mas contenido ', (error) => {
            if (error) return console.error('Error al actualizar el archivo');

            fs.readFile(filePath,'utf8', (error, result) => {
                if (error) return console.error('Error al leer el archivo'); 
                console.log(result);

                fs.unlink(filePath, (error) => {
                    if (error) return console.error('Error al eliminar el archivo');
                });
            });
        });
    });
});
