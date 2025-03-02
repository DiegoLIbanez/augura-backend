const personService = require("../services/authService");

const getUserName = async (req, res) => {
  try {
    const { userName } = req.params;
    const response = await personService.getUserName(userName);
    if (response.length > 0) {
      return res.send({
        statusCode: 200,
        message: "Registros encontrados",
        data: response,
      });
    } else {
      return res.send({
        statusCode: 404,
        message: "No hay informacion",
        data: userName,
      });
    }

  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

module.exports = { getUserName };
