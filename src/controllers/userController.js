const userService = require("../services/userService");
const { encrypt } = require('../helper/handleBcrypt');

const getUserName = async (req, res) => {
  try {
    const body = req.body;
    const response = await userService.getUserName(body);
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
        data: _id,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
}

const getId = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await userService.getId(_id);
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
        data: _id,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

const getAll = async (req, res) => {
  try {
    const response = await userService.getAll();
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
        data: response,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

const getAllDriver = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await userService.getAllDriver(_id);
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
        data: response,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

const create = async (req, res) => {
  try {
    const body = req.body;
    const passwordHash = await encrypt(body.password);
    body.password = passwordHash;
    const response = await userService.create(body);
    res.send({statusCode:201,message:'Registrado con exito',data:response});
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

const update = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await userService.update(_id, req.body);
    if (response === null) {
      return res.send({ statusCode: 404, message: "No encontrado", data: _id });
    }
    res.send({
      statusCode: 200,
      message: "Actualizado con exito",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

const deleteId = async (req, res) => {
  try {
    const { _id } = req.params;
    const response = await userService.deleteId(_id);
    if (response === null) {
      return res.send({
        statusCode: 404,
        message: "No se pudo eliminar , por que no se encuentra",
        data: _id,
      });
    }
    res.send({
      statusCode: 200,
      message: "Eliminado con exito",
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.send({ statusCode: 400, data: error });
  }
};

module.exports = { getAll, getUserName , getId, create, update, deleteId,getAllDriver };
