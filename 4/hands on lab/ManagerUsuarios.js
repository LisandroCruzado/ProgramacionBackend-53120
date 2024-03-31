/* Se creara una clase que permita gestionar usuarios usando fs.promises, este debera
contadr sólo dos métodos: Crear usuario y consultar todos los usuarios guardados.
- El manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
- El metodo 'Crear usuarios' debe recibir un objeto con los campos :
    -Nombre
    -Apellido
    -Edad
    -Curso
-El metodo debe guardar un usuario en un archivo 'Usuarios.json' deben guardar dentro de un arreglo
ya que se trabajaran con múltiples usuarios
- El método 'Consultar usuarios' debe poder leer un archivo Usuarios.json y devolver el arreglo
correspondiente a esos usuarios
*/
const fs = require('fs')
class ManagerUsuarios {
    constructor(archivo){
        this.archivo = archivo
    }

    async CrearUsuario(usuario){
        const nuevoUsuario = {
            Nombre : usuario.Nombre ?? 'Sin nombre',
            Apellido : usuario.Apellido ?? 'Sin apellido',
            Edad : usuario.Edad ?? 'Sin edad',
            Curso : usuario.Curso ?? 'Sin curso'
        }

        const usuarios = await this.ConsultarUsuarios()
        usuarios.push(nuevoUsuario)
        
        try {
            await fs.promises.writeFile(this.archivo, JSON.stringify(usuarios, null, '\t'))
            console.log('Usuario creado correctamente');
        } catch(e) {
            console.error('Error al crear usuario\n', e);
        }
    }

    async ConsultarUsuarios(){
        try{
            const usuarios = await fs.promises.readFile(this.archivo, 'utf-8')
            return JSON.parse(usuarios)
        } catch (error) {
            console.error(error);
            return []
        }
    }
}

module.exports = ManagerUsuarios //Exporto la clase