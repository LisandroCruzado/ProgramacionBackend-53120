const UserManager = require('./hands_on_lab')
const UM = new UserManager(`${__dirname}/Usuarios.json`)
const createUser = async () => {
    //Crear usuario
    let result = await UM.createUser({
        Name : 'Joaquin',
        LastName : 'Cejas',
        UserName : 'Joaco',
        Password: 'coder123'
    })

    console.log(result);

    result = await UM.createUser({
        Name : 'Joaquin',
        LastName : 'Cejas',
        Password: 'coder123'
    })
    console.log(result);

    result = await UM.createUser({
        Name : 'Ivan',
        LastName : 'Gonzales',
        UserName : 'Ivi',
        Password: 'pass2024'
    })
    console.log(result);

    result = await UM.createUser({
        Name : 'Joaquin',
        LastName : 'Cejas',
        UserName : 'Joaco',
        Password: 'coder123'
    })
    console.log(result);
    console.log(await UM.getAllUsers());
}
//Crear usuario de prueba
//createUser()

//Comparar contraseñas
const verifyUsers = async () => {
    let result = await UM.userValidator({
        UserName : 'Joaco',
        Password: 'adsadsa'
    })

    console.log(result);
    result = await UM.userValidator({
        UserName : 'Joaco',
        Password: 'coder123'
    })
    console.log(result);
}

verifyUsers()