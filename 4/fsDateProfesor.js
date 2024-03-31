const fecha = new Date()
const dia = fecha.getDate().toString().padStart(2,'0')
const mes = (fecha.getMonth() + 1).toString().padStart(2,'0')
const año = fecha.getFullYear()
const fechaFormatoDDMMYYYY = `${dia}/${mes}/${año}`

console.log(fechaFormatoDDMMYYYY) //Salida 16/02/2024
const path = 'mi_path'
const file = require('fs')
file.writeFile(`${path}/fecha.txt`, fechaFormatoDDMMYYYY, (err) => {
    if(err){
        console.error(err);
        return
    }
    file.readFile(`${path}/fecha.txt`, 'utf8', (err,data) => {
        if(err) {
            console.error(err);
            return
        }
        console.log(data);
    })
})