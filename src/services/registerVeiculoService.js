const registerVehicleModel = require("../models/registerVehicleModel");

const getId = async (_id) => {
  try {
    return await registerVehicleModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await registerVehicleModel
      .find({})
      .populate("person")
      .populate("vehicle")
      .populate("statusDesinfection")
      .populate("typeBurden")
      .populate("typeCommunal");
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await registerVehicleModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await registerVehicleModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await registerVehicleModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
