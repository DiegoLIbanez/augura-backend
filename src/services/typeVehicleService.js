const typeVehicleModel = require("../models/typeVehicleModel");

const getId = async (_id) => {
  try {
    return await typeVehicleModel.find({ _id });
  } catch (error) {
    throw error;
  }
};

const getAll = async () => {
  try {
    return await typeVehicleModel.find({});
  } catch (error) {
    throw error;
  }
};

const create = async (body) => {
  try {
    return await typeVehicleModel.create(body);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, body) => {
  try {
    return await typeVehicleModel.findByIdAndUpdate(_id, body);
  } catch (error) {
    throw error;
  }
};

const deleteId = async (_id) => {
  try {
    return await typeVehicleModel.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
};

module.exports = { getId, getAll, create, update, deleteId };
