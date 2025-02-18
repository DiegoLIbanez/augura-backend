const { compare } = require('../helper/handleBcrypt');
const { tokenSign } = require('../helper/generateToken');
const  loginService  = require("../services/loginService");

//TODO: Login!
const login = async (req, res) => {
    try {
        const { user, password } = req.body;

        //Valida que el usuario exista
        const dataUser = await loginService.userExisting(user);
        if(dataUser === null) {            
           return res.send({statusCode:404,message:'usuario no encontrado',data:[]});                    
        }

        //Valida que el usuario este activo
        if(dataUser.status.description === 'Inactivo'){
           return res.send({statusCode:400,message:'usuario inactivo',data:[]});
        }

        //Valida que la contraseña sea correcta
        const checkPassword = await compare(password, dataUser.password);        
        if (!checkPassword) {
            return res.send({statusCode:409,message:'contraseña invalida',data:[]});
        }

        //JWT
        const tokenSession = await tokenSign(dataUser);

        return res.send({statusCode:200,message:'usuario activo',data:{
            id:dataUser._id,
            user:dataUser.user,
            role:dataUser.role.description,
            token:tokenSession
        }});        
        
    } catch (error) {
        console.log(error);
        res.send({statusCode:400,data:error});        
    }
}

module.exports = { login }