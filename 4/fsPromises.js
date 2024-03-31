const fs = require('fs')
const filePath = './example.txt'

const runAsync = async (filePath) => {
    try {
        await fs.promises.writeFile(filePath, 'Hola coders estoy en un archivo')
        let content = await fs.promises.readFile(filePath, 'utf8')
        console.log(content);
        await fs.promises.appendFile(filePath, '  Mas contenido 😎')
        content = await fs.promises.readFile(filePath, 'utf8')
        console.log(content);
        await fs.promises.unlink(filePath)
    } catch (error) {
        console.log(error);
    }
}

runAsync(filePath)