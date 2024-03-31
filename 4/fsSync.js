const fs = require('fs')

const filePath = './example.txt'

fs.writeFileSync(filePath, 'Hola coders estoy en un archivo')

if(fs.existsSync(filePath)){
    let file = fs.readFileSync(filePath, 'utf8')

    console.log(file);
    fs.appendFileSync(filePath, '  Mas contenido 😎')
    file = fs.readFileSync(filePath, 'utf8')
    console.log(file);
    fs.unlinkSync(filePath)
}