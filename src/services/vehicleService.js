const vehicleModel = require("../models/vehicleModel");

const getId = async (_id) => {
  try {
    return await vehicleModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await vehicleModel
      .find({})
      .populate("typeVehicle")
      .populate("company");
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await vehicleModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await vehicleModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await vehicleModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
