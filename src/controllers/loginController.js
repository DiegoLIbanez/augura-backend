const { compare } = require("../helper/handleBcrypt");
const { tokenSign } = require("../helper/generateToken");
const loginService = require("../services/loginService");

//TODO: Login!
const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    //Valida que el usuario exista
    const dataUser = await loginService.userExisting(user);
    if (dataUser === null) {
      return res
        .status(404)
        .json({ message: "usuario no encontrado", data: [] });
    }

    //Valida que el usuario este activo
    if (dataUser.status.description === "Inactivo") {
      return res.status(403).json({ message: "usuario inactivo", data: [] });
    }

    //Valida que la contraseña sea correcta
    const checkPassword = await compare(password, dataUser.password);
    if (!checkPassword) {
      return res.status(401).json({ message: "contraseña invalida", data: [] });
    }

    //JWT
    const tokenSession = await tokenSign(dataUser);
    return res
      .status(200)
      .json({ message: "Usuario activo", data: { token: tokenSession } });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "A ocurrido un error", data: error });
  }
};

module.exports = { login };
