/* 
Práctica de módulos nativos: 
fs + crypto
¿Cómo lo hacemos? Se creará una clase “UserManager” que permitirá guardar usuarios en un archivo. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar los módulos nativos  fs y crypto, El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un archivo “Usuarios.json”, recordando que la contraseña debe estar hasheada por seguridad
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide.
*/
const fs = require('fs')
const crypto = require('crypto')

module.exports = class UserManager {
    constructor(file){
        this.file = file
    }

    async getAllUsers() {
        try {
            const users = await fs.promises.readFile(this.file,'utf-8')
            return JSON.parse(users)
        } catch(error) {
            console.error(error.message);
            return []

        }
    }


    async createUser(user) {
        if(!user.UserName || !user.Password) return 'Debe proveer un usuario y contraseña'
        const newUser = {
            Name : user.Name ?? 'Sin Nombre',
            LastName : user.LastName ?? 'Sin apellido',
            UserName : user.UserName,
            Password : this.getHash(user.Password)
        }

        const users = await this.getAllUsers()
        users.push(newUser)

        try {
            await fs.promises.writeFile(this.file, JSON.stringify(users, null, '\t'))
            return 'Usuario creado correctamente'
        } catch (e) {
            console.error(error.message);
            return 'Error al crear usuario!'
        }

    }
    getHash(password) {
        return crypto.createHash('sha256').update(password).digest('hex')
    }

    async userValidator(user){
        const userValidate = {
            UserName : user.UserName,
            Password : user.Password
        }
        const users = await this.getAllUsers()

        for(let key in users) {
            if (userValidate.UserName === users[key].UserName) {
                if (this.getHash(userValidate.Password) === users[key].Password) return 'Usuario logueado'

                return 'Usuario o Contraseña incorrecta'
            }
        }
        return 'Usuario no encontrado'
    }
}


